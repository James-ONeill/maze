<?php

namespace App\Http\Controllers;

use App\Time;

class TimesController extends Controller
{
    public function index()
    {
        $times = Time::orderBy('total', 'asc')->limit(10)->get();

        return $times;
    }

    public function store()
    {
        Time::where('uuid', request('uuid'))->delete();

        $total = request('milliseconds', 0) + (request('seconds', 0) * 1000) + ((request('minutes', 0) * 60) * 1000);

        $time = Time::create(array_merge(request([
            'uuid',
            'name', 
            'email', 
            'drink',
            'minutes', 
            'seconds', 
            'milliseconds',
        ]), [
            'total' => $total
        ]));

        $time->append('position');

        $topTen = Time::orderBy('total', 'asc')->limit(10)->get();

        return response()->json([
            'time' => $time,
            'top_ten' => $topTen,
        ]);
    }
}
