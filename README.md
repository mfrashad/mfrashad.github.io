<br />
<p align="center">
  <a href="https://mfrashad.com">
    <img src="/img/og-image.png" alt="Logo" width="600">
  </a>

  <h3 align="center">www.mfrashad.com</h3>

  <p align="center">
    Rashad's Personal Website
    <br />
    <a href="https://github.com/mfrashad/mfrashad.github.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dscutp.com/">View Demo</a>
    ·
    <a href="https://github.com/mfrashad/mfrashad.github.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/mfrashad/mfrashad.github.io/issues">Request Feature</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

A portfolio website for Muhammad Fathy Rashad

### Built With

* [Jekyll](https://jekyllrb.com/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The website is built with jekyll, hence jekyll and ruby need to be installed for development.
- [Install Jekyll and ruby](https://jekyllrb.com/docs/installation/)



### Installation

After installing jekyll, you can proceed to clone the project:
```
$ git clone https://github.com/mfrashad/mfrashad.github.io.git
```

To run the website, use the following command in the root directory of the project:
```
$ bundle exec jekyll serve
```
Note: just running `$ jekyll serve`  command is enough sometimes depending your installation

The website will run on port 4000 by default, open `localhost:4000` on your browser to see the website.



<!-- USAGE EXAMPLES -->
## Documentation

The structure of the project looks something like this:
```
.
├── config.yml
├── _site # Dont touch this folder, it should be regenerated by jekyll
├── _data
|   └── experience.yml # edit experience details here
|   └── person.yml # edit skills data and about me here
|   └── portfolio.yml # edit project details here
|   └── testimonials.yml # edit testimonials here
├── _includes
├── _layouts
├── img # put all images here
├── style # put css or styling files here
├── scripts # put js files here
└── index.html # Root page of this folder
└── CV.pdf # CV to be hosted
```

### Index Page
To make changes on the index page, go to `index.html` in the root directory. Do note that some part have been modularized and separatated into files in `_includes` directory. Also, the `index.html` is using `_layouts/default.html` layout.

### Update CV
Replace CV.pdf with the latest CV.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project / Clone the project (For members that have been given access)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

You can drop me a message on my [Website](https://www.mfrashad.com/).




<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)