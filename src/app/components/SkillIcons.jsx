import React from 'react';

const SkillIcons = () => {
    const icons = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "azure logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "docker logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", alt: "amazonwebservices logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", alt: "gitlab logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg", alt: "rstudio logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "vscode logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg", alt: "phpstorm logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg", alt: "webstorm logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "html5 logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "css3 logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "react logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "javascript logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "typescript logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "nodejs logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "angularjs logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "bootstrap logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", alt: "vuejs logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "redux logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", alt: "sass logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "npm logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", alt: "matlab logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg", alt: "anaconda logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "python logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "numpy logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", alt: "pycharm logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-original.svg", alt: "rubymine logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "pytorch logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "tensorflow logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "pandas logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg", alt: "pytest logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", alt: "ruby logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "mongodb logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", alt: "blender logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", alt: "illustrator logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "figma logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", alt: "canva logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", alt: "trello logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", alt: "unity logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", alt: "arduino logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "postgresql logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "mysql logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "java logo" },
    ];

    return (
        <div className="skill-icons flex flex-wrap">
            {icons.map((icon, index) => (
                <React.Fragment key={index}>
                    <img src={icon.src} height="30" alt={icon.alt} />
                    <img width="12" alt="" />
                </React.Fragment>
            ))}
        </div>
    );
};

export default SkillIcons;
