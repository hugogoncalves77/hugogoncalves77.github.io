/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

$(document).ready(function () {
    renderPeople(peopleData);

    $("#start").click(function (e) {
        $("#startup").fadeOut();
        const player = $("#player")[0];
        player.volume = 0.4;
        player.play();

        const maskHeight = $(document).height();
        const maskWidth = $(window).width();
        const duration = Number((player.duration * 999).toFixed(0));

        $('#titles')
            .css({
                'width': maskWidth,
                'height': maskHeight
            })
            .fadeIn(500)
            .fadeTo('fast')
            .fadeIn();

        $('#credits')
            .css('left', (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + 'px')
            .css('bottom', '-' + (maskHeight * 25) + 'px')
            .show('fast')
            .animate(
                {
                    bottom: maskHeight + "px"
                },
                {
                    duration: duration,
                    complete: function () {
                        $('#titles').fadeOut();
                        $("#player").animate(
                            {
                                volume: 0
                            },
                            {
                                duration: 1500,
                                complete: function () {
                                    player.pause();
                                    player.currentTime = 0;
                                    $("#startup").fadeIn();
                                }
                            }
                        );
                    }
                }
            );
    });
});
