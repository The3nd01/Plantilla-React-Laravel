<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Peticiones;
use Illuminate\Validation\Rules\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrganizadorController extends Controller
{
    public function realizarPeticion(Request $request)
    {
        /* return response()->json([
            'asd' => $request->documento
        ]); */
        $validarPeticion = Validator::make($request->all(), [
            'empresa' => 'required|max:100',
            'dni' => 'required|regex:/^\d{8}[a-z]$/i',
            'documento' => ['required', File::types(['pdf'])->max(12 * 1024)],
            'comentario' => 'nullable|max:500'
        ]);

        if ($validarPeticion->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Error de validacion de la petición',
                'errors' => $validarPeticion->errors()
            ], 401);
        }else{
            return response()->json([
                'asd' => true
            ]);
        }
        /* try {
            $validarPeticion = Validator::make($request->all(), [
                'empresa' => 'required|max:100',
                'dni' => 'required|regex:/^\d{8}[a-z]$/i',
                'documento' => ['required', File::types(['pdf'])->max(12 * 1024)],
                'comentario' => 'nullable|max:500'
            ]);

            if ($validarPeticion->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Error de validacion de la petición',
                    'errors' => $validarPeticion->errors()
                ], 401);
            }
            Peticiones::create([
                'empresa' => $request->empresa,
                'dni' => $request->dni,
                'documento' => $request->documento,
                'comentario' => $request->comentario,
                'idUsuario' => $request->user()->id
            ]);
            return response()->json([
                'status' => true,
                'message' => 'Petición realizada correctamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ]);
        } */
    }
}