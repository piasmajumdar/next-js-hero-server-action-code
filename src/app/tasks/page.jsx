import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h2> Tasks: {tasks.length}</h2>
            {
                tasks.map(task=> <TasksCard key={task.id} task={task}></TasksCard>)
            }
        </div>
    );
};

export default TasksPage;