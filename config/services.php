<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'google' => [
        'map_key' => env('GOOGLE_MAP_KEY','AIzaSyDoxHt7qRysqWysf5cbyD-gfpIxetDaIhk'),
        'recaptcha' => env('GOOGLE_RECAPTCHA_SITEKEY')
    ],

    'facebook' => [
        'app_id' => ''
    ],

    'subscribe' => [
        'mailchimp_api_key' => env('MAILCHIMP_API_KEY'),
        'mailchimp_list_id' => env('MAILCHIMP_LIST_ID'),
    ],
    'email' => [
        'mail_admin' => env('CONTACT_EMAIL_ADMIN'),
        'mail_hr' => env('CONTACT_EMAIL_HR')
    ],
];
