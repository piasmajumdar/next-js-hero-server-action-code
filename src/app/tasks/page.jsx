import { AddTask } from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2 className='p-7'> Tasks: {tasks.length}</h2>
            <div className='ml-7'>
                <AddTask></AddTask>
            </div>
            <div className='p-8'>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;