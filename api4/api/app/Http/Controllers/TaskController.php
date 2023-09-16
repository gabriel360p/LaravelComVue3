<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Task::all();
    }
    

    /**
     * Display a listing of the resource.
     */
    public function markeds()
    {
        return Task::where('isDone',true)->get();
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Task::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        // $task= Task::find($request->id);
        return $request->id;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $taskID = $request->id;
        $task=Task::find($taskID);
        $task->update($request->all());
        return $task;
    }


    /**
     * Update the specified resource in storage.
     */
    public function marked(Request $request)
    {
        $taskID = $request->id;
        $task=Task::find($taskID);
        $task->update(['isDone'=>true]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function unmarked(Request $request)
    {
        $taskID = $request->id;
        $task=Task::find($taskID);
        $task->update(['isDone'=>false]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, task $task)
    {
        Task::find($request->id)->delete();
    }
}
