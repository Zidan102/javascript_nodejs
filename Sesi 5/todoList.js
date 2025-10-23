import { Task, DEFAULT_PRIORITY } from "./task";

const task1 = new Task("Belajar JavaScript");
const task2 = new Task("Membayar Tagihan", "high");

console.log(`Prioritas Default: ${DEFAULT_PRIORITY}`);
console.log(`Tugas 1: ${task1.title}, Prioritas: ${task1.priority}`);
console.log(`Tugas 2: ${task2.title}, Prioritas: ${task2.priority}`);

task1.markCompleted();