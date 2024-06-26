<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\CiudadesController;
use App\Http\Controllers\API\CategoriasController;
use App\Http\Controllers\API\EventoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ciudades', [CiudadesController::class, 'getCiudades']);
Route::get('/categorias', [CategoriasController::class, 'getCategorias']);


Route::get('/correoPrueba', [UsuarioController::class, 'correoPrueba']);

// Route::post('storeEvento','API\EventoController@storeEvento')->name('storeEventos');
// Route::post('updateEvento','API\EventoController@updateEvento')->name('updateEventos');
// Route::post('deleteEvento','API\EventoController@deleteEvento')->name('deleteEventos');

// ARREGLO DEL ERROR 404 AL RECARGAR
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');