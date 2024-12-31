import mongoose, {Schema} from "mongoose";


// create a todo schema
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    match: /^.{1,30}$/
  },
  isCompleted: {
    type: Boolean,
    default: false,
  } 
})

// create a model
const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default Todo;