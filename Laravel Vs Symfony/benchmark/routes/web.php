<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/benchmark/eloquent', 'BenchmarkController@eloquent');
Route::get('/benchmark/eloquent2', 'BenchmarkController@eloquent2');
Route::get('/benchmark/doctrine', 'BenchmarkController@doctrine');

Route::get('/benchmark/eloquent/read', 'BenchmarkController@eloquentRead');
Route::get('/benchmark/doctrine/read', 'BenchmarkController@doctrineRead');
