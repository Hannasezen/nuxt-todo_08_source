<template>
  <li class="list-group-item">
    <form>
      <div class="form-group form-check">
        <input type="checkbox" :checked="item.done" @change="toggleDone(item.id)" class="form-check-input" id="done">
        <label v-if="!isEdit" class="form-check-label" :class="{ done: item.done }" for="done">{{ item.title }}</label>
        <input v-else type="text" class="form-control" @keyup.enter="onSave" @keyup.esc="onCancel" v-model="newTitle">
      </div>
      <div class="controls">
        <button v-if="!isEdit" class="btn btn-sm btn-primary" @click.prevent="switchToEdit">Edit</button>
        <button v-else class="btn btn-sm btn-success" @click.prevent="onSave">Save</button>
        <button class="btn btn-sm btn-danger" @click.prevent="onDelete">Delete</button>
      </div>
    </form>
  </li>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: "TodoItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        newTitle: '',
        isEdit: false
      }
    },
    methods: {
      ...mapActions({
        deleteTodo: 'Todo/deleteTodo',
        editTodo: 'Todo/editTodo',
        toggleDone: 'Todo/toggleDone'
      }),
      switchToEdit() {
        this.newTitle = this.item.title;
        this.isEdit = true;
      },
      onCancel() {
        this.isEdit = false;
        this.newTitle = '';
      },
      onSave() {
        this.isEdit = false;
        this.editTodo({ title: this.newTitle, id: this.item.id });
        this.newTitle = '';
      },
      onDelete() {
        if(confirm('Are you sure?')) {
          this.deleteTodo(this.item.id);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/scss/vars';

  .controls .btn-danger {
    margin-left: 10px;
    background: $danger-color;

    &:hover {
      background: lighten($danger-color, 30%);
    }
  }
  .list-group-item {
    margin-top: 5px;
    margin-bottom: 5px;
    
    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  .form-group {
    margin-bottom: 0;
  }
  .form-check-label {
    margin-bottom: 0;
    margin-left: 20px;

    &.done {
      text-decoration: line-through;
    }
  }
</style>
