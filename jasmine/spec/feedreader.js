/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        })

        it('have URLs', function () {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined
                expect(feed.url.length).not.toBe(0)
            }
        })

        it('have names', function () {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined
                expect(feed.name.length).not.toBe(0)
            }
        })
    })

    describe('The menu', function () {
        it('is hidden by default', function () {
            expect(document.body.classList.contains('menu-hidden')).toBe(true)
        })
    })

    it('toggles on click', function () {
        document.querySelector('.menu-icon-link').click()
        expect(document.body.classList.contains('menu-hidden')).toBe(false)
        document.querySelector('.menu-icon-link').click()
        expect(document.body.classList.contains('menu-hidden')).toBe(true)
    });

    describe('Feed container', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done()
            })
        })
        it('has at least a single entry', function () {
            expect(document.querySelector(".feed").getElementsByClassName("entry").length).toBeGreaterThan(0)
        })
    })

    describe('New Feed Selection', function () {

        let firstFeed

        beforeEach(function (done) {
            loadFeed(0, function () {
                firstFeed = document.querySelector('.feed').innerHTML
                loadFeed(1, function () {
                    done()
                })
            })
        })

        it("changes the content", function (done) {
            let secondFeed = document.querySelector('.feed').innerHTML
            done()
            expect(firstFeed).not.toBe(secondFeed)
        })
    })

}())
