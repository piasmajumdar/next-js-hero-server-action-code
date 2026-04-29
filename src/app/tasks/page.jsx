import { AddTask } from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/action';
import { getTasks } from '@/lib/tasks';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2 className='p-7'> Tasks: {tasks.length}</h2>
            <div className='ml-7'>
                <AddTask createATask={createATask}></AddTask>
            </div>
            <Link href={'/tasks/new'}>
                <Button variant='secondary'>Add Task</Button>
            </Link>
            <div className='grid grid-cols-3 gap-2 p-8'>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;