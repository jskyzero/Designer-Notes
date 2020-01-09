/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/10/19/nioh/index.html","d00ca4af218cc42840c231b1b6b429dd"],["/2017/10/22/ColorS/index.html","442b0776d28c823055b2602dadedcf80"],["/2018/04/26/JohnDoeWorld/index.html","079ef5db8329588e47d5ebc49d86b8c6"],["/2018/05/10/initial/index.html","530fae11658681205af1d1f14958e2db"],["/2018/05/17/start/index.html","7a78fa7bbe086a26106f506fcb134a93"],["/2018/06/04/GermBattle/index.html","a666d770bdaf898768ebde2639075e95"],["/2018/06/22/TheFish/index.html","3830096d4b795d3d6076a3b15255eadd"],["/2018/06/25/dnf/index.html","39c59c73c2df608b7804e7ccc5182f11"],["/2018/07/07/you/index.html","fc76fbaf06a3e99f41171659a8fbdf98"],["/2018/07/19/detroit/index.html","574e3d6e5a4511df4f357b97522d86e2"],["/2018/07/31/mgsv/index.html","a5145390663f4ff7118eab02893440b9"],["/2018/08/11/mhw/index.html","1f610340520c2b515934d0f9d5cffcb5"],["/2018/08/16/Words/index.html","217e10b62b304f6e93dae9500f224993"],["/2018/08/25/decadent/index.html","d7295493ddd6da27ac87ef7f9e07620f"],["/2018/08/30/ori.blind_forest/index.html","384c06be375e132245d0edf3a9a435ea"],["/2018/09/09/okami_hd/index.html","6322bc45a1f9c3d73643ae627f88e4aa"],["/2018/09/09/peoples/index.html","77f02ed406f05ff80b1bb30459a67db5"],["/2018/09/25/introduction_to_game/index.html","f07eaae8917fadcc25be69544342f197"],["/2018/10/08/game_design_vocabulary/index.html","e037309c7c2379def9352bcc35180461"],["/2018/10/13/top/index.html","7bdd4c269b83acf77d5c70f0f5c962bf"],["/2018/12/02/careful/index.html","7f349f7548086943726a55c1babadf77"],["/2018/12/02/recently/index.html","208166fcb9d59533384f8874d90d911b"],["/2019/02/18/Excel/index.html","1c10fc8416bf4b2b18f3a0c4881e33d1"],["/2019/02/20/recently/index.html","92d50521a49448936f3c292aef00eb25"],["/2019/03/24/restart/index.html","89a3bece01d257a8f24c4ba33012f0a2"],["/2019/05/18/penguin_and_rpg/index.html","ba2da2af508021194eb3e0536f76148c"],["/2019/05/31/recently/index.html","03047f93abeaeb0d48c267300a3a627a"],["/2019/07/28/dragon_raja/index.html","01dfb7f694d91328f63b4dda2eca2560"],["/2019/08/04/BeforeQuestion/index.html","84d5354597359e6df9578d13c4cd8d99"],["/2019/08/04/Project.DL/index.html","e5658e3b6930a27d77ecf74f03e4ba0a"],["/2019/08/28/save_cat/index.html","7d55034a52c82895573f66df330f7dfe"],["/2019/09/09/mhw.ib/index.html","d4e4f811bf45b91d24cff32084c40b40"],["/2019/10/10/Memento/index.html","d98867753c32d16d248ab38d46c72b59"],["/2019/10/15/开放世界/index.html","b76eaac89b9d5d90b5050b6ecde3f566"],["/2019/10/15/横板格斗/index.html","75097fdfc2e5694ca7cf090dcc4ccb51"],["/2019/10/21/extra_credits/index.html","cb329b8a20d5b547b5cc18224f359046"],["/2019/11/21/recently/index.html","9f79fd8d7261bd939e3413b8e675e00b"],["/2019/11/22/how_to_write_game_plot/index.html","bd96cb5ef045540771b1440cd06ac687"],["/2020/01/05/sakura_nagashi/index.html","adcd0b966662487942c95e1a4764d96b"],["/404/index.html","889727a38efdadf4a1d6695d3a879a38"],["/about/index.html","86fb3a74188f68fecfdcbcba2b497bd1"],["/assets/css/main.css","d13e6d9d8381e65e8126d5ebb77d5b4b"],["/assets/img/HeavenFeel.jpg","f55db065a822ac39bf666ddcce213ac1"],["/assets/img/books/how_to_write_game_plot/plot.png","8f03b2d9ef6a22a3e1b4595db570c3b0"],["/assets/img/books/introduction_to_game/introduction_to_game (1).jpg","511564e3aae385061c70041ec71ab045"],["/assets/img/books/introduction_to_game/introduction_to_game (10).jpg","23b3702be2a7f5278498700f3ec470b9"],["/assets/img/books/introduction_to_game/introduction_to_game (11).jpg","c5a6079f37b8abdeb948150f27a8908d"],["/assets/img/books/introduction_to_game/introduction_to_game (12).jpg","0759660e20db872bf479f943e5cc5c42"],["/assets/img/books/introduction_to_game/introduction_to_game (13).jpg","746d71670931a7f0cbd912ae45799eb8"],["/assets/img/books/introduction_to_game/introduction_to_game (14).jpg","f2d531dc5e88085d344ccfff2eea1ee3"],["/assets/img/books/introduction_to_game/introduction_to_game (15).jpg","24f3b2e673efe76dd4d3fb365fa639ae"],["/assets/img/books/introduction_to_game/introduction_to_game (2).jpg","262cd1ef0d7400e96fb33f868eea53ed"],["/assets/img/books/introduction_to_game/introduction_to_game (3).jpg","0ee10c135bfed4f6e05c635eb5eca976"],["/assets/img/books/introduction_to_game/introduction_to_game (4).jpg","6e4dd577690d02340e06685d89898ffe"],["/assets/img/books/introduction_to_game/introduction_to_game (5).jpg","850ff3bf98d99b20305290383238bdc6"],["/assets/img/books/introduction_to_game/introduction_to_game (6).jpg","1cbdb3819eecd4f0a20485ab32067062"],["/assets/img/books/introduction_to_game/introduction_to_game (7).jpg","804f0d17b8d8d677d06f7fc73d8e1b52"],["/assets/img/books/introduction_to_game/introduction_to_game (8).jpg","5f28843082eb604fcb9af39efa585ca5"],["/assets/img/books/introduction_to_game/introduction_to_game (9).jpg","ee8b6a786aa44ead26ee233e10a0eb3a"],["/assets/img/books/penguin/ (1).jpg","d2c66cc6e3c02525043f6775a2694891"],["/assets/img/books/penguin/ (10).jpg","b3af8c1ffc2611dc14f42c3004ba2970"],["/assets/img/books/penguin/ (11).jpg","d1e7621a4e38a6838ac8f1701bf974ae"],["/assets/img/books/penguin/ (12).jpg","7e97d26fc613382c610e3a2edeabe55d"],["/assets/img/books/penguin/ (13).jpg","7aeea7f9108867fa42a2deba88cf8bf5"],["/assets/img/books/penguin/ (14).jpg","9fe4f0f811898bb11ebbb1b4485aa767"],["/assets/img/books/penguin/ (15).jpg","c9d551ec73fd6d5396900de841cd6fe6"],["/assets/img/books/penguin/ (17).jpg","82b2d576e5db2788ec7b30be35062f56"],["/assets/img/books/penguin/ (18).jpg","4fcabf81f906658863a4ff6b4bf63130"],["/assets/img/books/penguin/ (19).jpg","7b2f409927c62461d78848635324cb08"],["/assets/img/books/penguin/ (2).jpg","61ef259fb169428c3890c8b47f25a504"],["/assets/img/books/penguin/ (20).jpg","f094b613c062cfd7d90069302d89a1e2"],["/assets/img/books/penguin/ (21).jpg","5836e17324173560a092fbe50e1bd313"],["/assets/img/books/penguin/ (22).jpg","a5eb818c3da8947fd3e95fc74b9188f1"],["/assets/img/books/penguin/ (23).jpg","95aa98bce4656f65881290aaaac34dfb"],["/assets/img/books/penguin/ (24).jpg","6ad69af67adc1201d563a74de12438b9"],["/assets/img/books/penguin/ (25).jpg","7f18c58a55b162a419db263f81de2ca5"],["/assets/img/books/penguin/ (3).jpg","037c8811d8447acf1f7bd005766cb388"],["/assets/img/books/penguin/ (5).jpg","da345244a17b7ba404bb946ef3d61973"],["/assets/img/books/penguin/ (6).jpg","9d9cec25cccaa2a717cea9031d30767a"],["/assets/img/books/penguin/ (7).jpg","625166b8bfa0d423b09708ba8bc1ec81"],["/assets/img/books/penguin/ (9).jpg","7fccbe0a343251f050caa83c6cd131bf"],["/assets/img/books/peoples/people (1).jpg","f13c80146894b6b456f855821b8de512"],["/assets/img/books/peoples/people (10).jpg","29456d0551adb797c01fa81c5d5b05b7"],["/assets/img/books/peoples/people (11).jpg","6a9560ff1f51b4f194fd84a1cbb0c63d"],["/assets/img/books/peoples/people (12).jpg","63e081fbd19c4f2d931d8bde3f93838b"],["/assets/img/books/peoples/people (13).jpg","ef1ad7e37ba55cf844f253f2362ab979"],["/assets/img/books/peoples/people (2).jpg","5fe42b3286f3551c1a6400696e763fac"],["/assets/img/books/peoples/people (3).jpg","43e96b22067c3db90416baec1b23aaeb"],["/assets/img/books/peoples/people (4).jpg","b0f780e396b2edc5c9ad806bd4c3de0d"],["/assets/img/books/peoples/people (5).jpg","3c31e56768364dcf36bbab00004ba151"],["/assets/img/books/peoples/people (6).jpg","70d05c2804ed0e7ebb77fcdc37301554"],["/assets/img/books/peoples/people (7).jpg","71d9fb77cb1b9b9a0ef00fcb73004412"],["/assets/img/books/peoples/people (8).jpg","f85b3a3990dff17693a9145a34c01588"],["/assets/img/books/peoples/people (9).jpg","e4b1ee99d806132b4ab3eb3bd13c85bd"],["/assets/img/daily/heart.jpg","30f81c77523cc7b72637b1a152a5ccc5"],["/assets/img/daily/iria.jpg","8e6178ed35522f4a0c71f0e19a9bb0d7"],["/assets/img/designs/colors/preview.jpg","862c829399eb84449224c448f19a0930"],["/assets/img/designs/memento/1.png","c5acddf6e9584f69ea316215e33fdc63"],["/assets/img/designs/memento/2.png","ea73f0767d5652a728eae911efcacd6b"],["/assets/img/designs/memento/3.png","18febaef6a2a23a07dc47be92f178bb4"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/gameplay/detroit/01/1.jpg","6832f2617b5549546cc1bb1593ec367e"],["/assets/img/gameplay/detroit/01/10.jpg","64efa7bbacf4166c8e603f69052d900c"],["/assets/img/gameplay/detroit/01/2.jpg","30f74d0dfd9191d00c034c8501b7834d"],["/assets/img/gameplay/detroit/01/3.jpg","4881da69c5bf46f7b978605981da97b0"],["/assets/img/gameplay/detroit/01/4.jpg","1d516920a0db8f62e585f2ca5669675d"],["/assets/img/gameplay/detroit/01/5.jpg","e9a02b3334e110fd3cbcea5f163cbd3e"],["/assets/img/gameplay/detroit/01/6.jpg","51ced01f4e669fa6ac39e0ce515f39ab"],["/assets/img/gameplay/detroit/01/7.jpg","b721f0718f67618edff3e16455287f8e"],["/assets/img/gameplay/detroit/01/8.jpg","b28826fc9f3b3031cfa5928e7f0c37b7"],["/assets/img/gameplay/detroit/01/9.jpg","d58f271d35b3ca1fe43c81d971746d2b"],["/assets/img/gameplay/detroit/02/1.jpg","d12b884b4a8c63de11ef7c08da33d33a"],["/assets/img/gameplay/detroit/02/2.jpg","f4088893fb6f2c74adf2f6f8f414092d"],["/assets/img/gameplay/detroit/02/3.jpg","0b2c38257eb815915124baf704e01915"],["/assets/img/gameplay/detroit/02/4.jpg","5dbf7ab5c02c3b8700e61c2acaed7f3e"],["/assets/img/gameplay/detroit/02/5.jpg","07ce26a0c1e7a3790de346a68efe4420"],["/assets/img/gameplay/detroit/02/6.jpg","5384f2ddc190ae791507e69eea35527b"],["/assets/img/gameplay/detroit/03/1.jpg","c46ec8cb73c1594be90c26df6e004a86"],["/assets/img/gameplay/detroit/03/10.jpg","5d1287ed694cd5e10ada484ee428f14d"],["/assets/img/gameplay/detroit/03/11.jpg","66a69749384931cf5e981ec7b9c49432"],["/assets/img/gameplay/detroit/03/12.jpg","a02b916f0df85287ecf1460b6e356d35"],["/assets/img/gameplay/detroit/03/13.jpg","124d96fff00a6d5beeff6faa8dd54b5a"],["/assets/img/gameplay/detroit/03/14.jpg","4e4012cc6b75a518cc65c6c19397fe6a"],["/assets/img/gameplay/detroit/03/15.jpg","11c817422e4658fc19ad1a47224d7f59"],["/assets/img/gameplay/detroit/03/16.jpg","627db0aee8b7cc74e49129d715777caf"],["/assets/img/gameplay/detroit/03/2.jpg","374e810104a74766a8aaa547af396923"],["/assets/img/gameplay/detroit/03/3.jpg","355ed63d315078aab1507d0276dbd5a9"],["/assets/img/gameplay/detroit/03/4.jpg","c543cdbc55a4715afe45aa6608e88d97"],["/assets/img/gameplay/detroit/03/6.jpg","9b3a7dac4aaed6a583085e828e130e5c"],["/assets/img/gameplay/detroit/03/7.jpg","991eab9994f925903c790c42410d4aed"],["/assets/img/gameplay/detroit/03/8.jpg","a9aef75254e899b57b27b01d076ba36e"],["/assets/img/gameplay/detroit/03/9.jpg","4f008dff10380cabeb0065dc2663b424"],["/assets/img/gameplay/dragon-raja/1 (1).jpg","bcabd9df59104a4007f43f791c40f34b"],["/assets/img/gameplay/dragon-raja/1 (10).jpg","efc2a058a47577097a90a8bce6f6a13d"],["/assets/img/gameplay/dragon-raja/1 (13).jpg","401ec392a3e12fc0884bc94a5efad618"],["/assets/img/gameplay/dragon-raja/1 (14).jpg","c8a1223af0b3db2a9a1e5deb43c7d50f"],["/assets/img/gameplay/dragon-raja/1 (15).jpg","134d266b3ebf13ee1a9151549d32451e"],["/assets/img/gameplay/dragon-raja/1 (16).jpg","0a377d43f851ab021042fc6167d8ecbf"],["/assets/img/gameplay/dragon-raja/1 (17).jpg","02079cd171001db5101f912c520a46c1"],["/assets/img/gameplay/dragon-raja/1 (18).jpg","a07faa36f5cbfabe6bb6df55b9d5f520"],["/assets/img/gameplay/dragon-raja/1 (19).jpg","aca527499c34ff2983aa04c606204313"],["/assets/img/gameplay/dragon-raja/1 (2).jpg","ce69d2590fa6687b3af6b080db717d89"],["/assets/img/gameplay/dragon-raja/1 (20).jpg","1bb2ee24cf1c122cd4647143e3e5ab74"],["/assets/img/gameplay/dragon-raja/1 (22).jpg","7a32557adc4ea4a6bca49ce5bf5411f1"],["/assets/img/gameplay/dragon-raja/1 (25).jpg","733dc51307d2970515434f3a8d766da5"],["/assets/img/gameplay/dragon-raja/1 (26).jpg","a97062b327669c323a079efb24477898"],["/assets/img/gameplay/dragon-raja/1 (27).jpg","0fbefa44bd90d365a25ad8b35b515089"],["/assets/img/gameplay/dragon-raja/1 (3).jpg","bbb4bc85658a011cac1128daf915fa56"],["/assets/img/gameplay/dragon-raja/1 (5).jpg","86d06f3f19b9540f1028ce26deb37161"],["/assets/img/gameplay/dragon-raja/1 (6).jpg","51482c88ff1bdc627c9db13d996ed571"],["/assets/img/gameplay/dragon-raja/1 (7).jpg","9cdf73fa722d83a9590cd52fa18409bf"],["/assets/img/gameplay/dragon-raja/1 (8).jpg","1374b6bfb2299f687a740abc36a05fda"],["/assets/img/gameplay/dragon-raja/1 (9).jpg","d7fb30063542189f6827a0b6d6370b34"],["/assets/img/gameplay/mgsv/mgsv_history.jpg","f5ea25e059a135667f4c77d40e3bb217"],["/assets/img/gameplay/mgsv/people.jpg","a95fc81ce11a4bb5fdb6293f576a34eb"],["/assets/img/gameplay/mgsv/quiet.jpg","ea33ddba1e5a654804035ae9cb2021a5"],["/assets/img/gameplay/mgsv/score.jpg","bc97383c5079d8f3cedc4252ce74c3a4"],["/assets/img/gameplay/mhw.ib/1 (1).jpg","d0f67390b67b8f2580967b8d23546274"],["/assets/img/gameplay/mhw.ib/1 (2).jpg","571b9e3d156b8b5ada80815baebb7b57"],["/assets/img/gameplay/mhw.ib/1 (3).jpg","48d9626ba499056297627f63951b2260"],["/assets/img/gameplay/mhw.ib/1 (4).jpg","40b3d60c374e58264868217e99e5be5b"],["/assets/img/gameplay/mhw.ib/1 (5).jpg","48b20444f0648d7d9e2899a35506a767"],["/assets/img/gameplay/mhw.ib/1 (7).jpg","b3bab5b5295d6d50473b10182b127be2"],["/assets/img/gameplay/mhw.ib/1 (8).jpg","eca474365e3f8eb02282d9e9af971635"],["/assets/img/gameplay/mhw.ib/1 (9).jpg","a22502fe3e41fc16c169d567d1c66e9e"],["/assets/img/gameplay/mhw/USJ.jpg","5c102645576c3042e71b1971666106ca"],["/assets/img/gameplay/mhw/player_info.jpg","87ec59a42371e0d69c0514484633a8a9"],["/assets/img/gameplay/mhw/weapon1.jpg","8e122ba331ea2c9ea6ca901aff5c62fa"],["/assets/img/gameplay/mhw/weapon2.jpg","8f0ffa8308b75c426b3eccef0fa2237c"],["/assets/img/gameplay/nioh/player_info.jpg","4dc3eb79440e9d1a6efa5e27899ec441"],["/assets/img/gameplay/nioh/system.jpg","c80a63961f541bae6bbc117b5ba09c13"],["/assets/img/gameplay/nioh/ui_preview.jpg","0f9ab0d1f0412ce38dcc005049fd0bd7"],["/assets/img/gameplay/okami/OKAMI0.jpg","ffa9dc4a49fdd1e416ec0d968fa046fe"],["/assets/img/gameplay/okami/OKAMI1.jpg","eb6deb5ba5f84b683242529ee79c98f1"],["/assets/img/gameplay/okami/OKAMI3.jpg","4ca65b18265576dc9b2f7ff78c98868f"],["/assets/img/gameplay/okami/OKAMI4.jpg","13767606bccbf148991476bc28661139"],["/assets/img/gameplay/recently/19.05/evoland.jpg","4898d18ee4acbb6afe0f21bf67805e4f"],["/assets/img/gameplay/recently/19.05/honer.jpg","411f9eed883530822b094f11c77e1854"],["/assets/img/gameplay/recently/19.05/kirby.jpg","5b85f1b3063aecdd204ac5d4139b058f"],["/assets/img/gameplay/recently/19.05/sekiro.jpg","7a27c007adab807aad11bda4e6fddcaf"],["/assets/img/gameplay/recently/shihun.jpg","bc2a31b3769bafab12cdcc29c4abb12f"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/posts/Bayonetta2.jpg","6ef6be31dc22e0fe98bb592c1c03461d"],["/assets/img/posts/Bayonetta2_lg.jpg","b40fefb725431d1ee93b283099029f96"],["/assets/img/posts/Bayonetta2_md.jpg","564905c7c54e48e3c7fedb7e17752a54"],["/assets/img/posts/Bayonetta2_placehold.jpg","31c803d70cfa761382777bb3302dd7d8"],["/assets/img/posts/Bayonetta2_sm.jpg","3f125b6a7a10b320da14430d11a3888e"],["/assets/img/posts/Bayonetta2_thumb.jpg","18d5f36ce51f18c87e1b3d1751868b15"],["/assets/img/posts/Bayonetta2_thumb@2x.jpg","8790c6a0ae701ae3efe715b267470a3f"],["/assets/img/posts/Bayonetta2_xs.jpg","1ab4c4ded32c377a55c19a087fcbeb78"],["/assets/img/posts/ColorS.jpg","e621f143ee74885dc427844e140cb35d"],["/assets/img/posts/ColorS_lg.jpg","3ca3e44228738af9ab9a4bedfef9c190"],["/assets/img/posts/ColorS_md.jpg","3c1a36cc7cf7ad03e45cb856d8f3cf53"],["/assets/img/posts/ColorS_placehold.jpg","d07734cedc98c78344510ad15600f6b7"],["/assets/img/posts/ColorS_sm.jpg","1c6e0e627c4f8fd3e81f85fc91c088da"],["/assets/img/posts/ColorS_thumb.jpg","fe939264c5e98fedf22a853d93b3c7b0"],["/assets/img/posts/ColorS_thumb@2x.jpg","5b23adcfc27918bbe8adf48c2f7bf620"],["/assets/img/posts/ColorS_xs.jpg","c68e6fc422221a76f03565bfb72c5063"],["/assets/img/posts/JohnDoeWorld.jpg","4a28d141cd88fbd23f113a71b3128477"],["/assets/img/posts/JohnDoeWorld_lg.jpg","83c6e3466e8aa3b06ae2af67843f5be0"],["/assets/img/posts/JohnDoeWorld_md.jpg","e40d70111dbb2d6351933a64c8a47654"],["/assets/img/posts/JohnDoeWorld_placehold.jpg","f7db30946c17ccb0c8443f2071784ba3"],["/assets/img/posts/JohnDoeWorld_sm.jpg","4d8b62b08635836a3319963d9c6c365e"],["/assets/img/posts/JohnDoeWorld_thumb.jpg","22ae5dff7989c224378c68dd28a5ab84"],["/assets/img/posts/JohnDoeWorld_thumb@2x.jpg","6aa1074a0522fc48979298e454475abe"],["/assets/img/posts/JohnDoeWorld_xs.jpg","132be065f903be92dd63897d6e3ba8c0"],["/assets/img/posts/OKAMI.jpg","be6dda9105bdc4be50346e266966513b"],["/assets/img/posts/OKAMI_lg.jpg","3abcac95fbf64ef32d731be07c292be1"],["/assets/img/posts/OKAMI_md.jpg","41fb47b8d86abb67f9b3436aa1bf003a"],["/assets/img/posts/OKAMI_placehold.jpg","4d4e39aa04a19564c886bb4005f146e4"],["/assets/img/posts/OKAMI_sm.jpg","6de9387fd5005aa94513a548ca882753"],["/assets/img/posts/OKAMI_thumb.jpg","3363aeb1d01ed9346d928f3c14754891"],["/assets/img/posts/OKAMI_thumb@2x.jpg","e50786614f605902055716d9b298538f"],["/assets/img/posts/OKAMI_xs.jpg","e591b9f7a4e8d8020a5ba8068fbfe207"],["/assets/img/posts/TheFish-Chapter1.jpg","85dd038972f1ff2dffd34ec3b6341904"],["/assets/img/posts/TheFish-Chapter1_lg.jpg","3a130d3a6c6874815c66ee2fd415f570"],["/assets/img/posts/TheFish-Chapter1_md.jpg","14bf91d22a6a64e286799790d237351d"],["/assets/img/posts/TheFish-Chapter1_placehold.jpg","0844dc62ce811377b9a9482947a12c8a"],["/assets/img/posts/TheFish-Chapter1_sm.jpg","80fc8adef387a1196e78c107fd5a33de"],["/assets/img/posts/TheFish-Chapter1_thumb.jpg","2aefe1ba94a3dd88ad9fbc9e8e50126b"],["/assets/img/posts/TheFish-Chapter1_thumb@2x.jpg","b4266231c0f046bf5c2e0d28a9ed3575"],["/assets/img/posts/TheFish-Chapter1_xs.jpg","4056909663ba6174bd075e4d3e6a6b79"],["/assets/img/posts/bands.jpg","3577e8fce06cea98e3a6b819ed21c2b8"],["/assets/img/posts/bands_lg.jpg","9d6090f21cd67869394646a071b6a528"],["/assets/img/posts/bands_md.jpg","130f540826b8e838b98947dc7f27bb6b"],["/assets/img/posts/bands_placehold.jpg","4ab217b20e1a7421701a5843ef91ddd3"],["/assets/img/posts/bands_sm.jpg","6dc6c64b36c4add8539e7b9f46ea28b7"],["/assets/img/posts/bands_thumb.jpg","638fdf36ff01c223f7898222dc0ccbd3"],["/assets/img/posts/bands_thumb@2x.jpg","44c07aefed9c03e4e23d8c9f342d874b"],["/assets/img/posts/bands_xs.jpg","66e31a8694df931e96ee42f9bfc61baf"],["/assets/img/posts/besiege.jpg","f061d9f19ea402c7219f8615d750455a"],["/assets/img/posts/besiege_lg.jpg","ec607bf9506620b7e6f8561e7563aa64"],["/assets/img/posts/besiege_md.jpg","a39a1d6028dce95eff595295863e8ab0"],["/assets/img/posts/besiege_placehold.jpg","d4c11f126b8842acd3e8150c4c7a7597"],["/assets/img/posts/besiege_sm.jpg","b5ef1600347afd6e21228a1f9415fce5"],["/assets/img/posts/besiege_thumb.jpg","4872cf7ea9dd79f88e437fb969568ba5"],["/assets/img/posts/besiege_thumb@2x.jpg","2c4e93a6140cc4c0eaaf95ddfb21f6a8"],["/assets/img/posts/besiege_xs.jpg","658c0ae3366aea2c65a05220e5c3d456"],["/assets/img/posts/bg.jpg","eb8afddb83ba6ae38c73a1366283c6a4"],["/assets/img/posts/bg.she.jpg","9add18cf73245f9f07fb3899ebda4d4c"],["/assets/img/posts/bg.she_lg.jpg","cca315f159f263e3fb0670343da75909"],["/assets/img/posts/bg.she_md.jpg","0e74de0997f35fb23bfa4d5d1e6e77e2"],["/assets/img/posts/bg.she_placehold.jpg","1bd31fa6bcd657d926ca36f2768839aa"],["/assets/img/posts/bg.she_sm.jpg","9b6b1954306e10a1b4db7b9ce55287a8"],["/assets/img/posts/bg.she_thumb.jpg","081af10898a617fa34b3c70a0a442ab0"],["/assets/img/posts/bg.she_thumb@2x.jpg","123c84b637ef83cfc9ae99b73aa0daf1"],["/assets/img/posts/bg.she_xs.jpg","edde8ceec46039b1e34cd5ab89c535ac"],["/assets/img/posts/bg_lg.jpg","eb8afddb83ba6ae38c73a1366283c6a4"],["/assets/img/posts/bg_md.jpg","70120ffcf748c415241d4453aec5d51a"],["/assets/img/posts/bg_placehold.jpg","8bd62a0d2e307516cc0a2125ea38fd41"],["/assets/img/posts/bg_sm.jpg","4da3d49445eb2413e60791349b9b03fa"],["/assets/img/posts/bg_thumb.jpg","9c9f91f447144aa4ff2460ef676b1e32"],["/assets/img/posts/bg_thumb@2x.jpg","7948787e5705c2c7c1560b7194bc1cf2"],["/assets/img/posts/bg_xs.jpg","17ee7d0c4cca1eab2cfd91bc1f21393a"],["/assets/img/posts/bloodborne.jpg","e722b54c7179c4eb3355aad7a7324d6f"],["/assets/img/posts/bloodborne_lg.jpg","e722b54c7179c4eb3355aad7a7324d6f"],["/assets/img/posts/bloodborne_md.jpg","d8b5e49e96464e37333404dd3dfd868c"],["/assets/img/posts/bloodborne_placehold.jpg","d82da9ceee50897825db46db1ae83739"],["/assets/img/posts/bloodborne_sm.jpg","68593389604900b4a060ac3cbc5832e9"],["/assets/img/posts/bloodborne_thumb.jpg","fad883f4cb50d7c64fdcc48fc3da05c2"],["/assets/img/posts/bloodborne_thumb@2x.jpg","8640de0cda5351a998ce08a5e213c0ef"],["/assets/img/posts/bloodborne_xs.jpg","9150cabfcd002324d1c73a262d3e4789"],["/assets/img/posts/careful.jpg","4296853a911c39938d2ac8efc7ac9953"],["/assets/img/posts/careful_lg.jpg","cbb48fb4cba8f068b7e63dd6dfd422ad"],["/assets/img/posts/careful_md.jpg","dc4f1642b2b52cc38f42ea89bf1eb6b0"],["/assets/img/posts/careful_placehold.jpg","f7128b5abd6a65c0056c9b652e4491cb"],["/assets/img/posts/careful_sm.jpg","ff48c2256a31d5d075e151333a3a859c"],["/assets/img/posts/careful_thumb.jpg","be454a9180f74a24f85718e8be36e3ce"],["/assets/img/posts/careful_thumb@2x.jpg","415c89904cced5a5cb63c034565b184c"],["/assets/img/posts/careful_xs.jpg","2ee458d4ac4fec75a55f9bac397e3f6a"],["/assets/img/posts/death_stranding.jpg","0e255a6a324bfe330a980936a4139981"],["/assets/img/posts/death_stranding_lg.jpg","6d40fe28202985c9973e868b1a99da2b"],["/assets/img/posts/death_stranding_md.jpg","ca5faf8cb923c7d2e0747af90590bbb3"],["/assets/img/posts/death_stranding_placehold.jpg","86568304fe5b727ec38fcdce65c6fd29"],["/assets/img/posts/death_stranding_sm.jpg","40f8df892c61a9c10cf78a070221919e"],["/assets/img/posts/death_stranding_thumb.jpg","cec48e2ce114730fc04ecebf79f11db9"],["/assets/img/posts/death_stranding_thumb@2x.jpg","a314a8a1c37ce66fc2e57f6d508363a2"],["/assets/img/posts/death_stranding_xs.jpg","5d5b139e1427dd0d90d98d4a7de80141"],["/assets/img/posts/decadent.jpg","28b20a024043e0217ba185e119349e62"],["/assets/img/posts/decadent_lg.jpg","c1463a603a270125d70d873b3038f952"],["/assets/img/posts/decadent_md.jpg","bf83d99557b62966ab56b7d669e2ea56"],["/assets/img/posts/decadent_placehold.jpg","b06e9f32c05ff1d99c7d3e8180fd62bc"],["/assets/img/posts/decadent_sm.jpg","89a7f0cbc2311868359f52c5249bbda8"],["/assets/img/posts/decadent_thumb.jpg","7ecbb85ec68a2715dd73edec1c956576"],["/assets/img/posts/decadent_thumb@2x.jpg","ce078852cbc3aee5f8eb9b1cb4af13ba"],["/assets/img/posts/decadent_xs.jpg","b33ca14ee5de43a7ea53db15013aa80e"],["/assets/img/posts/detroit.jpg","ad3c3fd63339a86d57d332aa6d5dde98"],["/assets/img/posts/detroit_lg.jpg","b0a07d0fa22c7a76c646017eda7d2398"],["/assets/img/posts/detroit_md.jpg","4b7db1d616ed3e4e74247fb4ac71c203"],["/assets/img/posts/detroit_placehold.jpg","b94cf8763bba1c5108b5359b974a36f4"],["/assets/img/posts/detroit_sm.jpg","f2bd798b57efca1fa89b94f3f23ee9b7"],["/assets/img/posts/detroit_thumb.jpg","a93472678b469ff7fa3c5ba54300153b"],["/assets/img/posts/detroit_thumb@2x.jpg","63dd501cd3bc0b7f86dcd77a61e43003"],["/assets/img/posts/detroit_xs.jpg","dedca9961d1e060977c80f0d51ba0354"],["/assets/img/posts/dmc5.jpg","f8bca461ecc6656df1566cd1dd552f92"],["/assets/img/posts/dmc5_lg.jpg","ea765c62ae592059ee76351ce174bffa"],["/assets/img/posts/dmc5_md.jpg","c6f935cbe344f8f134dcafdc6f68e3f7"],["/assets/img/posts/dmc5_placehold.jpg","158dc07b7011b3c4af42b7747b24cc7a"],["/assets/img/posts/dmc5_sm.jpg","0979604270be1671124b332aee517c39"],["/assets/img/posts/dmc5_thumb.jpg","b43e4e9882a4d3dde62b0163f8aa2224"],["/assets/img/posts/dmc5_thumb@2x.jpg","a2ef3d0ce2b0a0663a75698ecea32ce2"],["/assets/img/posts/dmc5_xs.jpg","1c67405ed4dd53b67c207a4b3b21d480"],["/assets/img/posts/dnf.jpg","fa3ec8be6cacf612aaf47a011e088362"],["/assets/img/posts/dnf_lg.jpg","2ccb1c0105babf09277b845393c4a8c1"],["/assets/img/posts/dnf_md.jpg","fb622058e8be6ad25c5b73fb49a06a50"],["/assets/img/posts/dnf_placehold.jpg","c2f92e089786d944423a7c8e96c5e287"],["/assets/img/posts/dnf_sm.jpg","313ea4a579c484799ac052c4fbea9770"],["/assets/img/posts/dnf_thumb.jpg","1c48b80defded0d52ec96c335cb369b8"],["/assets/img/posts/dnf_thumb@2x.jpg","ffbd6de1022e0b1ab298eac26cad47a7"],["/assets/img/posts/dnf_xs.jpg","5e6cf4912e6656d83546dcaf43703398"],["/assets/img/posts/dragon_raja.jpg","346964f9729ea04e30b2f228b9fe4f04"],["/assets/img/posts/dragon_raja_lg.jpg","d60a48f6b1951a7c8c60c7d52f583964"],["/assets/img/posts/dragon_raja_md.jpg","8159f348489a02251b961d0e320f7e77"],["/assets/img/posts/dragon_raja_placehold.jpg","587aab44cf02feffcab74005ce87261f"],["/assets/img/posts/dragon_raja_sm.jpg","89ca1fcf65f5b9e9255b3975bf69d8f7"],["/assets/img/posts/dragon_raja_thumb.jpg","8d007a401f69c3d65bd8311c5a4a2969"],["/assets/img/posts/dragon_raja_thumb@2x.jpg","4051e23f421eb6ea7b7d2e41e725f206"],["/assets/img/posts/dragon_raja_xs.jpg","f1d7fb2cb1f17701119f4a75d27d6afb"],["/assets/img/posts/excel.jpg","7b901e12b86159de14b81cbcd17d929f"],["/assets/img/posts/excel_lg.jpg","548be2014b3c928b68492e7ab625e261"],["/assets/img/posts/excel_md.jpg","3968d43ff2589a263d263113af73856c"],["/assets/img/posts/excel_placehold.jpg","3fc778125a98aa24c7e8e8d83c59900b"],["/assets/img/posts/excel_sm.jpg","34b0f09e39f606a0751490a52db4cd42"],["/assets/img/posts/excel_thumb.jpg","97dc30f6c2ac53e851190d7a97d12c45"],["/assets/img/posts/excel_thumb@2x.jpg","4fc166ba9f671e5b8ee339cc25a9ebf7"],["/assets/img/posts/excel_xs.jpg","187509c2c7c7020e8b7add2313d3365e"],["/assets/img/posts/fe.jpg","0ed3e5809ad65f1ed367b241a671d29c"],["/assets/img/posts/fe_lg.jpg","281fac2793e368af5dc10ae679549b79"],["/assets/img/posts/fe_md.jpg","2684a2e205d7a7887686eb88e9a5580a"],["/assets/img/posts/fe_placehold.jpg","5c629742a036857c355bd61103af75db"],["/assets/img/posts/fe_sm.jpg","0985c103664efb0747e2db91a02d788f"],["/assets/img/posts/fe_thumb.jpg","40bc026e68ba0834596e3de9fe8392ce"],["/assets/img/posts/fe_thumb@2x.jpg","42220af9d654a02a6c1d0881163e34a1"],["/assets/img/posts/fe_xs.jpg","2c3079f6cf68104d16a844819896b111"],["/assets/img/posts/friend.jpg","7c679d5d4c25c064cbf0aa2641cfe1c5"],["/assets/img/posts/friend_lg.jpg","7c679d5d4c25c064cbf0aa2641cfe1c5"],["/assets/img/posts/friend_md.jpg","a5983a19d33c8ee282d829fd7b42247f"],["/assets/img/posts/friend_placehold.jpg","0ef701b943cc69f5656339c5c6f5245a"],["/assets/img/posts/friend_sm.jpg","0646dd044fa2c546ac3ce71ac0ace1a2"],["/assets/img/posts/friend_thumb.jpg","b459254aae8f143f5a51735073214e6e"],["/assets/img/posts/friend_thumb@2x.jpg","1a00dbbd23321f2d818dc7ed78ba6b02"],["/assets/img/posts/friend_xs.jpg","e9873d73f759e4edbebdfc74c28d3d06"],["/assets/img/posts/germbattle.jpg","12979f8f8bfaea3311c51e17307a6470"],["/assets/img/posts/germbattle_lg.jpg","c52669acfb48409d0d131f84acf6d2fb"],["/assets/img/posts/germbattle_md.jpg","6ac3e6d1f46427e22288295939e91c24"],["/assets/img/posts/germbattle_placehold.jpg","eeb127f8d1bfa34bed49448337817288"],["/assets/img/posts/germbattle_sm.jpg","2233dab2c3b555448a9440d215000d6d"],["/assets/img/posts/germbattle_thumb.jpg","10d19bc44a1f7ada97c068b54038cd5c"],["/assets/img/posts/germbattle_thumb@2x.jpg","ff50614e7264fae3e9daec0a1e55d322"],["/assets/img/posts/germbattle_xs.jpg","1a93b42f2939938b1272dbbd80a632d0"],["/assets/img/posts/hit.jpg","c29908b96eaa7a71bf84a6a6e59ec957"],["/assets/img/posts/hit_lg.jpg","e50b60fb4d231b60e61bce1d0a380b23"],["/assets/img/posts/hit_md.jpg","43bed562ec383828d16361c263b1932e"],["/assets/img/posts/hit_placehold.jpg","4c53c07289156c120fcc074af4e20387"],["/assets/img/posts/hit_sm.jpg","ac3f87b6f2bc636e3bc28e60d8e49e64"],["/assets/img/posts/hit_thumb.jpg","817d4c472cdc26572cd9bb63b46035b2"],["/assets/img/posts/hit_thumb@2x.jpg","a87ee42107851432f6057f88d713550b"],["/assets/img/posts/hit_xs.jpg","b10d58108f124e07a4818a0b6707c7f1"],["/assets/img/posts/how_to_write_game_plot.jpg","e800eda28b7a4c7230be50a04b06d66a"],["/assets/img/posts/how_to_write_game_plot_lg.jpg","143e4314e290b54f68d42fab0055e5bd"],["/assets/img/posts/how_to_write_game_plot_md.jpg","7638db86604569cf854e2875e1ad74ed"],["/assets/img/posts/how_to_write_game_plot_placehold.jpg","58144dbb6a1da2b64b1f6a42dd5d956e"],["/assets/img/posts/how_to_write_game_plot_sm.jpg","a612d40d57d650d9378198767b1b7aec"],["/assets/img/posts/how_to_write_game_plot_thumb.jpg","f7cb9061967159421627215a60a42adb"],["/assets/img/posts/how_to_write_game_plot_thumb@2x.jpg","f631d87ef21c6a548c52be5e7f17b378"],["/assets/img/posts/how_to_write_game_plot_xs.jpg","91c5d7567ec7b0ccf28e8c54b9135310"],["/assets/img/posts/introduction_to_game.jpg","f8bbbf5714e511957a815e3e82a659d1"],["/assets/img/posts/introduction_to_game_lg.jpg","719ae965cec468a165fe4468066bf365"],["/assets/img/posts/introduction_to_game_md.jpg","1e7b196e680e562db3a83be8f255fb68"],["/assets/img/posts/introduction_to_game_placehold.jpg","b6a241bb7845d47ecfd97e0578a5f8f6"],["/assets/img/posts/introduction_to_game_sm.jpg","d24f8e1a29a92bdcf11271362efb537f"],["/assets/img/posts/introduction_to_game_thumb.jpg","67afb8c7c5be45c408de505d47269cae"],["/assets/img/posts/introduction_to_game_thumb@2x.jpg","c2bb43e556b89308838657f05840b259"],["/assets/img/posts/introduction_to_game_xs.jpg","3070839b6531ce2b8a78d2459b4df6b9"],["/assets/img/posts/memento.jpg","14f8c46eb0ee0aa323c8482dd91de1a4"],["/assets/img/posts/memento_lg.jpg","41617998edb639985d9cf0eba645300e"],["/assets/img/posts/memento_md.jpg","ec87d8f6377507dbf7e1423ef24459ca"],["/assets/img/posts/memento_placehold.jpg","a77913f031d72e0931b8a74594b87bda"],["/assets/img/posts/memento_sm.jpg","377aec1630cc794786d7a40606d2093b"],["/assets/img/posts/memento_thumb.jpg","ab3a6895420c6789955a9c66e2368650"],["/assets/img/posts/memento_thumb@2x.jpg","a60e296809e0509dd2b135dff1b850b1"],["/assets/img/posts/memento_xs.jpg","f2513ba3d35d88271f9d64849693171e"],["/assets/img/posts/mgsv.jpg","56bb9e4e0d6b1f5925179667a12d8567"],["/assets/img/posts/mgsv_lg.jpg","6d162e0303897f95573e433a207ed0d9"],["/assets/img/posts/mgsv_md.jpg","bbfbf91cd0479b637e10d18ae420dd6c"],["/assets/img/posts/mgsv_placehold.jpg","6c9333fee189f2a9a2446623ebc4f5ef"],["/assets/img/posts/mgsv_sm.jpg","1223a3f718b2a020a041292b2dae3f2e"],["/assets/img/posts/mgsv_thumb.jpg","2824359be21f293d79b0d640ada0d6ec"],["/assets/img/posts/mgsv_thumb@2x.jpg","2222151c30bdf280015aafb0f38e6dd0"],["/assets/img/posts/mgsv_xs.jpg","733497adbc8177e4c1b867b526257c00"],["/assets/img/posts/mhw.ib.jpg","a237cc45b767c6645bf081fe834c8bcd"],["/assets/img/posts/mhw.ib_lg.jpg","a10abe40c5319e05b7bbabad4e79e959"],["/assets/img/posts/mhw.ib_md.jpg","d0e634c703f39e63d1fc9be9b1c1340b"],["/assets/img/posts/mhw.ib_placehold.jpg","44b135b4ca4aafff7115969fda303a8b"],["/assets/img/posts/mhw.ib_sm.jpg","863c6ae85515c2c3d8ba73693b70b0c6"],["/assets/img/posts/mhw.ib_thumb.jpg","5557fd07ecdd8568562d008e85ba79d5"],["/assets/img/posts/mhw.ib_thumb@2x.jpg","59ed1e84ac2790e35e331f62b2abe900"],["/assets/img/posts/mhw.ib_xs.jpg","795fe72772993e81afe369769341635a"],["/assets/img/posts/mhw.jpg","b2b7aee2e5565116f754dfdcc299225f"],["/assets/img/posts/mhw_lg.jpg","83a66d084ab9bcef0e10a51783582204"],["/assets/img/posts/mhw_md.jpg","4d9febc5579b4fa71a9266aec9309a94"],["/assets/img/posts/mhw_placehold.jpg","b285ed8a9d7ec6768917f4b46312cad3"],["/assets/img/posts/mhw_sm.jpg","fad5d8a7cc3828688c45953f5f9df48d"],["/assets/img/posts/mhw_thumb.jpg","b13802391cfcb0c3681824855f829fb1"],["/assets/img/posts/mhw_thumb@2x.jpg","c091faa90836eac450f0f624c4b9683f"],["/assets/img/posts/mhw_xs.jpg","b754ef189589fec6609b0755726ff3a8"],["/assets/img/posts/nioh.jpg","c39dcb56ce93bd97b5595862b7428146"],["/assets/img/posts/nioh_lg.jpg","b47b211892b99e9b3c402e8c83b392c5"],["/assets/img/posts/nioh_md.jpg","c01c5a50826370b263890221f3f40f4c"],["/assets/img/posts/nioh_placehold.jpg","4a6bef797bf51dc6d21847c87a8a8ee2"],["/assets/img/posts/nioh_sm.jpg","e8a9e88de09882dd4570bd74660a4b8e"],["/assets/img/posts/nioh_thumb.jpg","510f2e200084b2bad7e91ed3a6c0619b"],["/assets/img/posts/nioh_thumb@2x.jpg","09f8be213918f3c736db81286333fe7f"],["/assets/img/posts/nioh_xs.jpg","64c191a4337db404541790efb829ff8a"],["/assets/img/posts/ori.blind_forest.jpg","56e381f3eb0c5945d0fc4b21867ef1fd"],["/assets/img/posts/ori.blind_forest_lg.jpg","97d4ea4b0003d67b05d5ad746ea493f2"],["/assets/img/posts/ori.blind_forest_md.jpg","d2ea0ba0db1e8fe4499892faf06faba3"],["/assets/img/posts/ori.blind_forest_placehold.jpg","9f79459b781dfd45f789b92a810525c7"],["/assets/img/posts/ori.blind_forest_sm.jpg","5ce550b2e358992416224dcabaebb960"],["/assets/img/posts/ori.blind_forest_thumb.jpg","1a47af00e2092eb03b58711ec2a15c1d"],["/assets/img/posts/ori.blind_forest_thumb@2x.jpg","3dd6989d5a98d26f976aacbc57a9d787"],["/assets/img/posts/ori.blind_forest_xs.jpg","a2fb1f58f19e8dc9b32bfc6ea964f0f1"],["/assets/img/posts/penguin_highway.jpg","9aaea2d6266a3aacdcb01efbf46126ae"],["/assets/img/posts/penguin_highway_lg.jpg","83e91b0b879ec9494762840c1d517b4f"],["/assets/img/posts/penguin_highway_md.jpg","094dd2079f5fefef0b0005990197f84b"],["/assets/img/posts/penguin_highway_placehold.jpg","b2ec47a5de1feae2f049a7401509e746"],["/assets/img/posts/penguin_highway_sm.jpg","e2e1a45f6ed05102cd55d43d69f574e8"],["/assets/img/posts/penguin_highway_thumb.jpg","9c2a2b28acede92d2449e83b8ea85350"],["/assets/img/posts/penguin_highway_thumb@2x.jpg","521bb86b8724ac3a57b8d4088b56a1c0"],["/assets/img/posts/penguin_highway_xs.jpg","20bde96466623b759d4d65dc97201758"],["/assets/img/posts/project.dl.jpg","da3fe02084068d19cc07fb1ab0ca7f76"],["/assets/img/posts/project.dl_lg.jpg","c5d8836f1b57733678d07590172deb19"],["/assets/img/posts/project.dl_md.jpg","b129d47894d37c0005e1756508702246"],["/assets/img/posts/project.dl_placehold.jpg","29848e8204a330043afd9e0eee3e2250"],["/assets/img/posts/project.dl_sm.jpg","9c7cfb9a3b0b72053a1221b1223bb363"],["/assets/img/posts/project.dl_thumb.jpg","8c3dfd4591c935c11413c56b5fa806bf"],["/assets/img/posts/project.dl_thumb@2x.jpg","76a65746dde6c015d125857df26cf7fa"],["/assets/img/posts/project.dl_xs.jpg","0697dfe359f18ab994df2692c37acd5c"],["/assets/img/posts/report.2019-10-15.1.jpg","0a2d05769b40515a79ceab861a323236"],["/assets/img/posts/report.2019-10-15.1_lg.jpg","93737a44341f6685383bf5941485c4ee"],["/assets/img/posts/report.2019-10-15.1_md.jpg","6f3d842b393d4fc1dd7d3dd2fe913c99"],["/assets/img/posts/report.2019-10-15.1_placehold.jpg","93d664c4bbff63ad64d023bbdc1fc214"],["/assets/img/posts/report.2019-10-15.1_sm.jpg","8d1a4772c1a9a064857f39fef9f54f49"],["/assets/img/posts/report.2019-10-15.1_thumb.jpg","a5fc2a5357071c53f1de257afdf26e98"],["/assets/img/posts/report.2019-10-15.1_thumb@2x.jpg","05bc8c5d7cd86f8688f40cf2bf3bf431"],["/assets/img/posts/report.2019-10-15.1_xs.jpg","da3e6d0086373804b658fdab35c26661"],["/assets/img/posts/report.2019-10-15.2.jpg","47eaf8b0b91788186484480c7fc5a30f"],["/assets/img/posts/report.2019-10-15.2_lg.jpg","4392b0c6b4857673fd6bd1cb74963b1b"],["/assets/img/posts/report.2019-10-15.2_md.jpg","3796ca293f18f43674214286fe52c1bb"],["/assets/img/posts/report.2019-10-15.2_placehold.jpg","6c41f0501db886eeb314ba1af293303a"],["/assets/img/posts/report.2019-10-15.2_sm.jpg","58161993fb5f3a1cd27bc8a6e3e406d4"],["/assets/img/posts/report.2019-10-15.2_thumb.jpg","742918dd46cbaee19166619e9c7c535f"],["/assets/img/posts/report.2019-10-15.2_thumb@2x.jpg","a53d9dbf52f9d43b66a01ff46d03b2b5"],["/assets/img/posts/report.2019-10-15.2_xs.jpg","0369b15067548ba261f11e566f3f6955"],["/assets/img/posts/restart.jpg","26efd4e8e99ff582d99af5681f60cdd4"],["/assets/img/posts/restart_lg.jpg","202bd87d1338c3e4df99721706a13ee7"],["/assets/img/posts/restart_md.jpg","6ef2d53786cf38e209cbf3e7eec10819"],["/assets/img/posts/restart_placehold.jpg","8f6a12c51079197e9f9323953b3b68bf"],["/assets/img/posts/restart_sm.jpg","b8e014ff11f1daacce474cb008319596"],["/assets/img/posts/restart_thumb.jpg","e6b46581cd6ed0815764efcacb2a1247"],["/assets/img/posts/restart_thumb@2x.jpg","3a505b5f2ab876ab64073904edf2f31a"],["/assets/img/posts/restart_xs.jpg","38db99d6de5840d83f7eca1bbb854e6a"],["/assets/img/posts/sakura_nagashi.jpg","35911e71180c4fff2cf2eeb6580f8e42"],["/assets/img/posts/sakura_nagashi_lg.jpg","40e53491a5e9d918f4e160546ea3f9a9"],["/assets/img/posts/sakura_nagashi_md.jpg","7f67f643e2af8f662a1b34a158efe9ab"],["/assets/img/posts/sakura_nagashi_placehold.jpg","17dd2eadd1b3f0433000d2491bf13bfc"],["/assets/img/posts/sakura_nagashi_sm.jpg","e4dc4a9296be3bc5bc5534be811cb5ed"],["/assets/img/posts/sakura_nagashi_thumb.jpg","8df46d4197b1f5f2efec49d77623ae9f"],["/assets/img/posts/sakura_nagashi_thumb@2x.jpg","a7616ae2c76d30a0755940a0f45e2455"],["/assets/img/posts/sakura_nagashi_xs.jpg","84643d7a406a2a38c363aafcee8cf91b"],["/assets/img/posts/save_cat.jpg","012e1676c6fb6d5747c2de507dc61011"],["/assets/img/posts/save_cat_lg.jpg","5cb27fca1d0442d92cb961bbc32c07b1"],["/assets/img/posts/save_cat_md.jpg","86b53f00408f46f4c291a1a2c725047c"],["/assets/img/posts/save_cat_placehold.jpg","56a306f2d940f658f94045b1061efeae"],["/assets/img/posts/save_cat_sm.jpg","5ea4f63324e9417b6f264bcd523874f6"],["/assets/img/posts/save_cat_thumb.jpg","418f496d108ebbb5e72e0851df872ccc"],["/assets/img/posts/save_cat_thumb@2x.jpg","ba02cf56e9d276774f2bb24ea1178246"],["/assets/img/posts/save_cat_xs.jpg","f914da522f9eae98c767e4e5c034e162"],["/assets/img/posts/sky.jpg","ce505310cce213ba6b4bf2326966d3ec"],["/assets/img/posts/sky_lg.jpg","830469326371c3caa4a6605e56339cf6"],["/assets/img/posts/sky_md.jpg","4239e20e97343d90fd41c7955dcc0fec"],["/assets/img/posts/sky_placehold.jpg","a7cb65bed511c0430e8925fe4827b71c"],["/assets/img/posts/sky_sm.jpg","7743728e37779b916c376d32ea780e66"],["/assets/img/posts/sky_thumb.jpg","4f12ad8af560360dafc0efaef5f205f9"],["/assets/img/posts/sky_thumb@2x.jpg","a2ae33141585de861c5a103d1e826278"],["/assets/img/posts/sky_xs.jpg","a13df84971a90b3b3bf78a371be2a49f"],["/assets/img/posts/start.jpg","28071ed3508baac0d86b4241cacf2403"],["/assets/img/posts/start_lg.jpg","069e70362aaeb80e6e3ff5a86d25aba2"],["/assets/img/posts/start_md.jpg","8f041006930a223ff7c15313a4e2feb5"],["/assets/img/posts/start_placehold.jpg","511d35a198d2137b2929584391dc3eff"],["/assets/img/posts/start_sm.jpg","e0d09b4f48d04cf3f51c3f63275adf1d"],["/assets/img/posts/start_thumb.jpg","ecfa08e78d92dd34383250ce08f7354b"],["/assets/img/posts/start_thumb@2x.jpg","98387b77cf05d72ba8c536ad4af13911"],["/assets/img/posts/start_xs.jpg","659ff553d84024eb069a91177332c538"],["/assets/img/posts/top.jpg","a664f87dfa8facb808c6e1f047227a3b"],["/assets/img/posts/top_lg.jpg","3c933389666702a4be98ca097205c16a"],["/assets/img/posts/top_md.jpg","f3a1fdc18949c8bfc225980e2c83857a"],["/assets/img/posts/top_placehold.jpg","e7f5e4e2f83f85257d5c3152f065fe03"],["/assets/img/posts/top_sm.jpg","3e06217bb224266298e18a06389bd3bf"],["/assets/img/posts/top_thumb.jpg","d0356fceda102ca4da32fae7e64df4d7"],["/assets/img/posts/top_thumb@2x.jpg","3a178a84c4abebbfc6615415260187ff"],["/assets/img/posts/top_xs.jpg","203c420e0c967a067d15a81eaeb5d59f"],["/assets/img/posts/traveler.jpg","982a8570ab1dc6ee519a92a984b7ed9b"],["/assets/img/posts/traveler_lg.jpg","75e26e345a29a5a8a6a0e9f873a5e130"],["/assets/img/posts/traveler_md.jpg","f28eaab73c1f436e31ccbee9229101f9"],["/assets/img/posts/traveler_placehold.jpg","8fd5b941731da61d9788e63cb519e496"],["/assets/img/posts/traveler_sm.jpg","c99c8651e1b95d450297e7392e8dda4c"],["/assets/img/posts/traveler_thumb.jpg","4bc0ed8ea304adfb386ef44002b3e493"],["/assets/img/posts/traveler_thumb@2x.jpg","70d2c173e7209720541a9de550f63698"],["/assets/img/posts/traveler_xs.jpg","1a3d71c4fda85b01de58c9c76be5042f"],["/assets/img/posts/vocabulary.jpg","7cb8ade9b1edc6860a35daf1f2a2f6bd"],["/assets/img/posts/vocabulary_lg.jpg","12b74566fb9c41ecb6d0d5e3b32f78c1"],["/assets/img/posts/vocabulary_md.jpg","51ab890841f8f87dbeeb86c43d30a75e"],["/assets/img/posts/vocabulary_placehold.jpg","b92c17ea55d5a9093befe9b27dfcd56f"],["/assets/img/posts/vocabulary_sm.jpg","d1642fd3b5fbad4157e78aedb4170561"],["/assets/img/posts/vocabulary_thumb.jpg","99d8a41defc69fe27df620088ac1f9ac"],["/assets/img/posts/vocabulary_thumb@2x.jpg","b6abc4f832feddac82d958f8d99117df"],["/assets/img/posts/vocabulary_xs.jpg","4b1b433bc4aa414d2ddf2da2dcb33200"],["/assets/img/posts/words.jpg","2cc1316f8eae79a8ebd2530bc864b8f3"],["/assets/img/posts/words_lg.jpg","1d9645bcab58da73d111fce60572cf7b"],["/assets/img/posts/words_md.jpg","9cd4ca51b84ba89c645d4a9603632e42"],["/assets/img/posts/words_placehold.jpg","21483d93fe58444c5e7b8698fbea305f"],["/assets/img/posts/words_sm.jpg","896a9d28035c1ddbc0d99c96553702bb"],["/assets/img/posts/words_thumb.jpg","08dcf466f51e118df9430941eced806c"],["/assets/img/posts/words_thumb@2x.jpg","936d194595e113c2ddf15710ed285aa7"],["/assets/img/posts/words_xs.jpg","e0c3d3ecb60dcde0b2d59fc05682d063"],["/assets/img/posts/you.jpg","7149a73de0f2f9c66afd36449724a527"],["/assets/img/posts/you_lg.jpg","7c7a5ead6d78618f38e9bd047b50ce2a"],["/assets/img/posts/you_md.jpg","34a1221a9d32bed9233046a765fc65ee"],["/assets/img/posts/you_placehold.jpg","a10df67e1cd074cffb588b766ed1d8a3"],["/assets/img/posts/you_sm.jpg","eb14dfd0749a8f3bd3738259ea2ce304"],["/assets/img/posts/you_thumb.jpg","da229f29b2c0102be07dfa2d8e5a5ef1"],["/assets/img/posts/you_thumb@2x.jpg","3109c1188248f7e986bb61d70909d93b"],["/assets/img/posts/you_xs.jpg","f94bdf8972c646dbe8e5cf7775682863"],["/assets/img/preview.jpg","1a8aaa04c6f0333692d4737febdda052"],["/assets/img/report/2019-10-15/1571036449174.png","6c7d882ccdd9058cc223eb224071eaf0"],["/assets/img/report/2019-10-15/1571036762007.png","48b766a0bf12e3d485aa5bc08959bce9"],["/assets/img/report/2019-10-15/1571037197059.png","4fae1e1cdb5bb96ecd5f04a216dd0051"],["/assets/img/report/2019-10-15/1571041707544.png","97c97a8f7b93e075474c9202c26de126"],["/assets/img/report/2019-10-15/1571042252823.png","ba2b1637d8486604560e1415e46eedee"],["/assets/img/report/2019-10-15/1571043110587.png","a460cd848152a1136fcb5992a89f1bd4"],["/assets/img/report/2019-10-15/1571043686115.png","fce150f3e439beb9a31ec97bb3ee16e5"],["/assets/img/report/2019-10-15/1571044197364.png","39472a18816ad5d08984b949cdcf36a7"],["/assets/img/report/2019-10-15/1571046532798.png","f34bc772288af4a500115bc8338005d8"],["/assets/img/report/2019-10-15/1571047410980.png","d2c34766032b44faa24ac5ded3e83798"],["/assets/img/report/2019-10-15/1571047891418.png","c4d167b4c30f4cc08eb0bdb08de3642a"],["/assets/img/report/2019-10-15/1571049026971.png","3677f62919ebc1ba53a2643eb7560ec4"],["/assets/img/report/2019-10-15/1571049425174.png","969e561b6543f9dca2c8a582b513f524"],["/assets/img/skill/excel/function.jpg","928ab8876b33fdecb8e0a55ae0785120"],["/assets/img/skill/excel/id.png","5f1b48772a800984b18b24441021cb98"],["/assets/img/skill/excel/name.png","d9bcdf25069e635ea2a9f96193cb910d"],["/assets/img/skill/excel/plot.png","8b215dcea08f3c9de187588576946558"],["/assets/img/skill/excel/table1.png","93bc973a307c8187b7f91d9dc3a5872e"],["/assets/img/skill/excel/table2.png","cad397f725f2ef1fe33cf59e2d684ce3"],["/assets/img/skill/excel/vlookup.jpg","12ab7d2d1d16260ac166a2d18584a166"],["/assets/js/bundle.js","854e8d9298b91b9a656c8d89701d5b7d"],["/assets/js/mermaid.min.js","dc2022ad3d2a296c1540c33dbb041193"],["/categories/index.html","c8e5ff52c1b470052c38252951a2dc6e"],["/contact/index.html","18b78071afa46412db4bc4be5d17c179"],["/daily/index.html","aed312d1a3fd3e9a2228ba25000b08db"],["/index.html","503b459c03beb4ddafe2781aa1452bc5"],["/project/index.html","8372df45a4265386a107806fc068df77"],["/sw.js","f83d89d513b62da53b0a0f08dfa789ea"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







