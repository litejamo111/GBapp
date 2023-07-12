<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Report extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'name', 'group_id', 'report_id', 'access_level', 'dataset_id', 'created_id', 'updated_id'
    ];

    /**
     * @var string[]
     */
    protected $hidden = [
        'created_id', 'updated_id'
    ];

    /**
     * @var string[]
     */
    protected $with = [
        'user'
    ];

    /**
     * @return HasOne
     */
    public function created_by(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'created_id');
    }

    /**
     * @return HasOne
     */
    public function updated_by(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'updated_id');
    }

    /**
     * @return BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_reports')
            ->withPivot('report_id', 'user_id');
    }
}
