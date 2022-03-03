import { TodoRepository } from '../repositories/todo.repository'
const todoRepository = new TodoRepository()

export class TodoService {
  async getTodoList() {
    try {
      return await todoRepository.create()
    } catch (error) {
      throw error
    }
  }
}
