'use client'
import { newTaskAction } from "@/lib/action";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select, FieldError } from "@heroui/react";
import React from 'react';

const NewTask = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className='text-5xl'>Add a new Task</h2>
            <div>
                <form action={newTaskAction} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        validate={(value) => {
                            if (value.length < 5) {
                                return "Title must be at least 5 characters or longer";
                            }
                            return null;
                        }}
                        className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your Task Title" />
                        <FieldError />
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>Task Description</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <Select name="status" className="w-[256px]" placeholder="Select Status" isRequired={true}>
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="progress" textValue="progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="completed">
                                    Completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <Select name="priority" className="w-[256px]" placeholder="Select Priority" isRequired={true}>
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="low" textValue="low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="high" textValue="high">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <TextField className="w-full" name="assignedTo">
                        <Label>Assigned To</Label>
                        <Input placeholder="Assigned to" />
                    </TextField>
                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button slot={'close'} type="submit">Submit a Task</Button>
                    </Modal.Footer>
                </form>
            </div>

        </div>
    );
};

export default NewTask;