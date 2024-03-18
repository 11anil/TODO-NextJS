"use client"

import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...maintask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    const updatedTasks = [...maintask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  };

  return (
    <div>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My TODO LIST</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-4 border-zinc-800 rounded-lg m-5 px-4 py-2'
          placeholder='Enter task here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          className='text-2xl border-4 border-gray-800 rounded-lg m-5 px-4 py-2'
          placeholder='Enter description here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>

      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {maintask.length > 0 ? (
            maintask.map((task, index) => (
              <li key={index} className='flex items-center justify-between mb-5'>
                <div className='flex items-center justify-between mb-5 w-2/3'>
                  <h5 className='text-2xl font-semibold'>{task.title}</h5>
                  <h6 className='text-xl font-semibold'>{task.desc}</h6>
                </div>
                <button
                  onClick={() => deleteHandler(index)}
                  className='bg-red-400 text-white px-4 py-2 rounded font-bold'
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <h2>No Task Available</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Page;
