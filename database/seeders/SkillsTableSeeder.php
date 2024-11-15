<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('skills')->insert([
            ['skill_name' => 'Self-learning',               'skill_type' => 'soft', 'skill_description' => 'he ability to independently acquire new knowledge and skills without external assistance.'],
            ['skill_name' => 'Broad criteria',              'skill_type' => 'soft', 'skill_description' => 'The ability to make well-rounded decisions by considering various perspectives and factors.'],
            ['skill_name' => 'Teamwork',                    'skill_type' => 'soft', 'skill_description' => 'The ability to collaborate effectively with others to achieve common goals.'],
            ['skill_name' => 'Verbal Communication',        'skill_type' => 'soft', 'skill_description' => 'The skill of expressing thoughts and ideas clearly through spoken words.'],
            ['skill_name' => 'Written Communication',       'skill_type' => 'soft', 'skill_description' => 'The ability to convey information clearly and effectively through written language.'],
            ['skill_name' => 'Oral Communication',          'skill_type' => 'soft', 'skill_description' => 'The ability to speak and express ideas clearly in verbal form, often in public or group settings.'],
            ['skill_name' => 'Creativity and Innovation',   'skill_type' => 'soft', 'skill_description' => 'The ability to think outside the box and generate new ideas, solutions, or approaches.'],
            ['skill_name' => 'Conflict Management',         'skill_type' => 'soft', 'skill_description' => 'The ability to manage and resolve conflicts in a constructive and effective manner'],
            ['skill_name' => 'Emotional Intelligence',      'skill_type' => 'soft', 'skill_description' => 'The capacity to recognize, understand, and manage your own emotions, as well as the emotions of others.'],
            ['skill_name' => 'Leadership',                  'skill_type' => 'soft', 'skill_description' => 'The ability to guide, motivate, and inspire others to achieve goals or complete tasks.'],
            ['skill_name' => 'Attention to Detail',         'skill_type' => 'soft', 'skill_description' => 'The ability to focus on small, often overlooked aspects of a task or project to ensure accuracy and quality.'],
            ['skill_name' => 'Strategic Thinking',          'skill_type' => 'hard', 'skill_description' => 'The ability to plan and think long-term, considering all possible outcomes to make informed decisions. '],
            ['skill_name' => 'Decision Making',             'skill_type' => 'soft', 'skill_description' => 'The ability to make choices based on careful analysis and judgment.'],
            ['skill_name' => 'Critical Thinking',           'skill_type' => 'soft', 'skill_description' => 'The ability to analyze facts and situations objectively and logically to form reasoned judgments.'],
            ['skill_name' => 'Reasoning',                   'skill_type' => 'hard', 'skill_description' => 'Thee ability to apply logic and rational thinking to solve problems or make decisions.'],
            ['skill_name' => 'Ability to associate',        'skill_type' => 'soft', 'skill_description' => 'The skill of connecting ideas or concepts to create solutions or insights.'],
            ['skill_name' => 'Proactivity ',                'skill_type' => 'soft', 'skill_description' => 'The ability to take initiative and anticipate problems or opportunities, acting before being asked.'],
            ['skill_name' => 'Negotiation Skills',          'skill_type' => 'soft', 'skill_description' => 'The ability to reach agreements by discussing and compromising in a constructive manner.'],

        ]);
    }
}
