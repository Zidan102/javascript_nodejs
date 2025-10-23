export const DEFAULT_PRIORITY = 'medium';

export class Task {
    constructor(title, description, priority = DEFAULT_PRIORITY) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;
        console.log(`Tugas "${this.title}" telah selesai.`);
    }
}