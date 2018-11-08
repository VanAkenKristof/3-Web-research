<?php

namespace App\Http\Controllers;

use App\Benchmark;
use App\BenchmarkDoctrine;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use LaravelDoctrine\ORM\Facades\EntityManager;

class BenchmarkController extends Controller
{
    public function eloquent()
    {
        Benchmark::truncate();

        $start = microtime(true);
        for ($i = 0; $i < 1000; $i++) {
            $benchmark = new Benchmark();
            $benchmark->content = config('benchmark.string');
            $benchmark->save();
        }
        $end = microtime(true);

        dd($end-$start);
    }

    public function eloquent2()
    {
        Benchmark::truncate();

        $records = [];
        for ($i = 0; $i < 100; $i++) {
            $records[$i] = ['content' => config('benchmark.string')];
        }

        $start = microtime(true);
        DB::table('benchmarks')->insert($records);
        $end = microtime(true);

        dd($end-$start);
    }

    public function doctrine()
    {
        Benchmark::truncate();

        $start = microtime(true);
        for ($i = 0; $i < 1000; $i++) {
            $benchmark = new BenchmarkDoctrine(config('benchmark.string'));
            EntityManager::persist($benchmark);
        }

        EntityManager::flush();

        $end = microtime(true);

        dd($end-$start);
    }

    public function eloquentRead()
    {
        $start = microtime(true);

        $records = Benchmark::all();

        $end = microtime(true);

        dd(($end-$start)*1000);
    }

    public function doctrineRead()
    {
        $start = microtime(true);

        $repository = EntityManager::getRepository(BenchmarkDoctrine::class);
        $record = $repository->findAll();

        $end = microtime(true);

        dd(($end-$start)*1000);
    }
}
