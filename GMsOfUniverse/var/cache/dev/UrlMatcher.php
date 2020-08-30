<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/game/get_Calendar' => [[['_route' => 'getCalendar', '_controller' => 'App\\Controller\\GameController::getCalendar'], null, ['GET' => 0], null, false, false, null]],
        '/game/get_Calendar_anon' => [[['_route' => 'getCalendarAnon', '_controller' => 'App\\Controller\\GameController::getCalendarAnon'], null, ['GET' => 0], null, false, false, null]],
        '/game/get_game' => [[['_route' => 'getGame', '_controller' => 'App\\Controller\\GameController::getGame'], null, ['POST' => 0], null, false, false, null]],
        '/game/get_Types' => [[['_route' => 'getTypes', '_controller' => 'App\\Controller\\GameController::getTypes'], null, ['GET' => 0], null, false, false, null]],
        '/game/get_Participants' => [[['_route' => 'getParticipants', '_controller' => 'App\\Controller\\GameController::getParticipants'], null, ['POST' => 0], null, false, false, null]],
        '/game/create_campagne' => [[['_route' => 'createCampagne', '_controller' => 'App\\Controller\\GameController::createCampagne'], null, ['POST' => 0], null, false, false, null]],
        '/game/create_game' => [[['_route' => 'createGame', '_controller' => 'App\\Controller\\GameController::createGame'], null, ['POST' => 0], null, false, false, null]],
        '/game/modify_game' => [[['_route' => 'modifyGame', '_controller' => 'App\\Controller\\GameController::modifyGame'], null, ['POST' => 0], null, false, false, null]],
        '/game/add_img' => [[['_route' => 'addImg', '_controller' => 'App\\Controller\\GameController::addImg'], null, ['POST' => 0], null, false, false, null]],
        '/game/remove_img' => [[['_route' => 'removeImg', '_controller' => 'App\\Controller\\GameController::removeImg'], null, ['POST' => 0], null, false, false, null]],
        '/game/participe' => [[['_route' => 'participe', '_controller' => 'App\\Controller\\GameController::participe'], null, ['POST' => 0], null, false, false, null]],
        '/game/no_participe' => [[['_route' => 'noParticipe', '_controller' => 'App\\Controller\\GameController::noParticipe'], null, ['POST' => 0], null, false, false, null]],
        '/post/create_post' => [[['_route' => 'createPost', '_controller' => 'App\\Controller\\PostController::createPost'], null, ['POST' => 0], null, false, false, null]],
        '/post/modify_post' => [[['_route' => 'modifyPost', '_controller' => 'App\\Controller\\PostController::modifyPost'], null, ['POST' => 0], null, false, false, null]],
        '/post/modify_post_img' => [[['_route' => 'modifyPostImg', '_controller' => 'App\\Controller\\PostController::modifyPostImg'], null, ['POST' => 0], null, false, false, null]],
        '/post/get_slider' => [[['_route' => 'getSlider', '_controller' => 'App\\Controller\\PostController::getSlider'], null, ['GET' => 0], null, false, false, null]],
        '/post/get_historique' => [[['_route' => 'getHistorique', '_controller' => 'App\\Controller\\PostController::getHistorique'], null, ['GET' => 0], null, false, false, null]],
        '/post/get_sponso' => [[['_route' => 'getSponso', '_controller' => 'App\\Controller\\PostController::getSponso'], null, ['GET' => 0], null, false, false, null]],
        '/post/get_post' => [[['_route' => 'getPost', '_controller' => 'App\\Controller\\PostController::getPost'], null, ['POST' => 0], null, false, false, null]],
        '/security' => [[['_route' => 'security', '_controller' => 'App\\Controller\\SecurityController::index'], null, null, null, false, false, null]],
        '/test' => [[['_route' => 'test', '_controller' => 'App\\Controller\\SecurityController::test'], null, ['POST' => 0], null, false, false, null]],
        '/profile' => [[['_route' => 'profile', '_controller' => 'App\\Controller\\SecurityController::profile'], null, ['POST' => 0], null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\SecurityController::register'], null, ['POST' => 0], null, false, false, null]],
        '/addAvatar' => [[['_route' => 'addAvatar', '_controller' => 'App\\Controller\\SecurityController::addAvatar'], null, ['POST' => 0], null, false, false, null]],
        '/api/doc.json' => [[['_route' => 'app.swagger', '_controller' => 'nelmio_api_doc.controller.swagger'], null, ['GET' => 0], null, false, false, null]],
        '/login_check' => [[['_route' => 'api_login_check'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
            .')/?$}sD',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [
            [['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
