<?php

namespace App\Http\Controllers;

use App\Time;

class TimesController extends Controller
{
    public function index()
    {
        $times = Time::topTen();

        return $times;
    }

    public function store()
    {
        $total = request('milliseconds', 0) + (request('seconds', 0) * 1000) + ((request('minutes', 0) * 60) * 1000);

        $time = Time::create(array_merge(request([
            'uuid',
            'name', 
            'minutes', 
            'seconds', 
            'milliseconds'
        ]), [
            'total' => $total
        ]));

        $topTen = Time::topTen();

        return response()->json([
            'time' => $time,
            'top_ten' => $topTen,
        ]);
    }
}
