<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ProfileRepository;

class ProfileController extends Controller
{
    protected $repository;

    public function __construct(ProfileRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $profiles = $this->repository->all();
        return response()->json($profiles);
    }

    public function show($id)
    {
        $profile = $this->repository->find($id);

        if ($profile) {
            return response()->json($profile);
        } else {
            return response()->json(['error' => 'Profile not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $profile = $this->repository->create($request->all());
        return response()->json($profile);
    }

    public function update(Request $request, $id)
    {
        $this->repository->update($id, $request->all());
        return response()->json($this->repository->find($id));
    }

    public function destroy($id)
    {
        $this->repository->delete($id);
        return response()->json('Profile deleted successfully');
    }
}
