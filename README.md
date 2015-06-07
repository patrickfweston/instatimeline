# instatimeline
InstaTimeline

DESCRIPTION

InstaTimeline is a system built on top of TimelineJS in order to automatically generate a beautifully crafted timeline for specific events like weddings, concerts, sporting events, and etc.


KEY TECHNOLOGIES

Python 2.5+ (2.7.3 recommended)
Ruby 1.8.7+ (1.9.3 recommended)
Unix like operating system (OS X, Ubuntu, Debian, and more)
Will not work on Windows (because of grit)
SECURITY

Don't enable --custom-css or --custom-js unless you trust every user who has the ability to edit the wiki. A better solution with more security is being tracked in #665.

INSTALLATION

The best way to install Gollum is with RubyGems:

$ [sudo] gem install gollum
If you're installing from source, you can use Bundler to pick up all the gems:

$ bundle install
In order to use the various formats that Gollum supports, you will need to separately install the necessary dependencies for each format. You only need to install the dependencies for the formats that you plan to use.

ASCIIDoc -- brew install asciidoc on mac or apt-get install -y asciidoc on Ubuntu
Creole -- gem install creole
Markdown -- gem install redcarpet
GitHub Flavored Markdown -- gem install github-markdown
Org -- gem install org-ruby
Pod -- Pod::Simple::HTML comes with Perl >= 5.10. Lower versions should install Pod::Simple from CPAN.
RDoc
ReStructuredText -- easy_install docutils
Textile -- gem install RedCloth
MediaWiki -- gem install wikicloth
SYNTAX

Gollum supports a variety of formats and extensions (Markdown, MediaWiki, Textile, …). On top of these formats Gollum lets you insert headers, footers, links, image, math and more.

Check out the Gollum Wiki for all of Gollum's formats and syntactic options.

RUNNING

To view and edit your Gollum repository locally via the built in web interface, simply install the Gollum gem, navigate to your repository via the command line, and run the executable:

$ gollum
This will start up a web server running the Gollum frontend and you can view and edit your wiki at http://localhost:4567. To get help on the command line utility, you can run it like so:

$ gollum --help
Note that the gollum server will not run on Windows because of an issue with posix-spawn (which is used by Grit).
