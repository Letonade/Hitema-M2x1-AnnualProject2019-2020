<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format'], ['variable', '/', '\\d+', 'code'], ['text', '/_error']], [], []],
    '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token'], ['text', '/_wdt']], [], []],
    '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], []],
    '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], []],
    '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], []],
    '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], []],
    '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token'], ['text', '/_profiler']], [], []],
    '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], []],
    '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token'], ['text', '/_profiler']], [], []],
    '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token'], ['text', '/_profiler']], [], []],
    '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::body'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token'], ['text', '/_profiler']], [], []],
    '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::stylesheet'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token'], ['text', '/_profiler']], [], []],
    'getCalendar' => [[], ['_controller' => 'App\\Controller\\GameController::getCalendar'], [], [['text', '/game/get_Calendar']], [], []],
    'getCalendarAnon' => [[], ['_controller' => 'App\\Controller\\GameController::getCalendarAnon'], [], [['text', '/game/get_Calendar_anon']], [], []],
    'getTypes' => [[], ['_controller' => 'App\\Controller\\GameController::getTypes'], [], [['text', '/game/get_Types']], [], []],
    'getParticipants' => [[], ['_controller' => 'App\\Controller\\GameController::getParticipants'], [], [['text', '/game/get_Participants']], [], []],
    'createCampagne' => [[], ['_controller' => 'App\\Controller\\GameController::createCampagne'], [], [['text', '/game/create_campagne']], [], []],
    'createGame' => [[], ['_controller' => 'App\\Controller\\GameController::createGame'], [], [['text', '/game/create_game']], [], []],
    'participe' => [[], ['_controller' => 'App\\Controller\\GameController::participe'], [], [['text', '/game/participe']], [], []],
    'noParticipe' => [[], ['_controller' => 'App\\Controller\\GameController::noParticipe'], [], [['text', '/game/no_participe']], [], []],
    'createPost' => [[], ['_controller' => 'App\\Controller\\PostController::createPost'], [], [['text', '/post/create_post']], [], []],
    'modifyPost' => [[], ['_controller' => 'App\\Controller\\PostController::modifyPost'], [], [['text', '/post/modify_post']], [], []],
    'getSlider' => [[], ['_controller' => 'App\\Controller\\PostController::getSlider'], [], [['text', '/post/get_slider']], [], []],
    'getHistorique' => [[], ['_controller' => 'App\\Controller\\PostController::getHistorique'], [], [['text', '/post/get_historique']], [], []],
    'getPost' => [[], ['_controller' => 'App\\Controller\\PostController::getPost'], [], [['text', '/post/get_post']], [], []],
    'security' => [[], ['_controller' => 'App\\Controller\\SecurityController::index'], [], [['text', '/security']], [], []],
    'test' => [[], ['_controller' => 'App\\Controller\\SecurityController::test'], [], [['text', '/test']], [], []],
    'profile' => [[], ['_controller' => 'App\\Controller\\SecurityController::profile'], [], [['text', '/profile']], [], []],
    'register' => [[], ['_controller' => 'App\\Controller\\SecurityController::register'], [], [['text', '/register']], [], []],
    'addAvatar' => [[], ['_controller' => 'App\\Controller\\SecurityController::addAvatar'], [], [['text', '/addAvatar']], [], []],
    'app.swagger' => [[], ['_controller' => 'nelmio_api_doc.controller.swagger'], [], [['text', '/api/doc.json']], [], []],
    'api_login_check' => [[], [], [], [['text', '/login_check']], [], []],
];
