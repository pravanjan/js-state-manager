<!-- Add banner here -->

# js-state-manager

<!-- Add buttons here -->

A tiny Javascript State manager Library writtern using Typescript. This library is more appropriate to use in a smaller micro forntend project.

<!-- Describe your project in brief -->

This is a project i have intially created to know how to build a small state mangement application. This has a very minimlal operation and does helps when we are building and sharing micro forntend architucture.

# Demo-Preview

![Random GIF](https://media.giphy.com/media/h4UAFDwzqnXKKB3q6m/giphy.gif?cid=790b761146296d2ea2ef610b3f168a0ad15884ba42b9637e&rid=giphy.gif&ct=g)

<!-- https://media.giphy.com/media/h4UAFDwzqnXKKB3q6m/giphy.gif?cid=790b761146296d2ea2ef610b3f168a0ad15884ba42b9637e&rid=giphy.gif&ct=g -->
<!-- Add a demo for your project -->

The about gif is from the the demo project build using this package package one with Array type and other with simple object type.
checkout this example project for more information on how it works

https://github.com/pravanjan/js-state-example

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.

Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
  - [Sponsor](#sponsor)
  - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)

# Installation

[(Back to top)](#table-of-contents)

<!-- *You might have noticed the **Back to top** button(if not, please notice, it's right there!). This is a good idea because it makes your README **easy to navigate.***

The first one should be how to install(how to generally use your project or set-up for editing in their machine).

This should give the users a concrete idea with instructions on how they can use your project repo with all the steps.

Following this steps, **they should be able to run this in their device.**

A method I use is after completing the README, I go through the instructions from scratch and check if it is working. -->

       npm i js-state-manager
       npm i -D js-state-manager  //for dev dependency

# Usage

<!-- This is optional and it is used to give the user info on how to use the project after installation. This could be added in the Installation section also. -->

Step 1 :
import StoreManager from the library

        import  {StoreManager } from "js-state-manager"

    /* Create instance of StoreManager instance */
        const storeManager = StoreManager.getInstance();
    /* Now supply your state to observe changes. */

        let store = {
        name:"userStore",
        state:[], // for very first time i have it empty.
     }
    const userStore = storeManager.createStore(store);

    /* Subscribe the  method so that it change when the array object changes */
    userStore.subscribe(your function);

Step 2:
Then define your action for state array. Every time we call this action it automatically call the subscribe render method.

        const AddNew = (state , payload)=>{
                       state.push(payload);
                       return state;
                    }

call and dispatch the action when your user clicked add user button.

       userStore.dispatch(AddNew,{user object goes here});

[(Back to top)](#table-of-contents)

# Development

[(Back to top)](#table-of-contents)

<!-- This is the place where you give instructions to developers on how to modify the code.

You could give **instructions in depth** of **how the code works** and how everything is put together.

You could also give specific instructions to how they can setup their development environment.

Ideally, you should keep the README simple. If you need to add more complex explanations, use a wiki. Check out [this wiki](https://github.com/navendu-pottekkat/nsfw-filter/wiki) for inspiration. -->

# Contribute

[(Back to top)](#table-of-contents)

<!-- This is where you can let people know how they can **contribute** to your project. Some of the ways are given below.

Also this shows how you can add subsections within a section. -->

### Sponsor

[(Back to top)](#table-of-contents)

<!-- Your project is gaining traction and it is being used by thousands of people(***with this README there will be even more***). Now it would be a good time to look for people or organisations to sponsor your project. This could be because you are not generating any revenue from your project and you require money for keeping the project alive.

You could add how people can sponsor your project in this section. Add your patreon or GitHub sponsor link here for easy access.

A good idea is to also display the sponsors with their organisation logos or badges to show them your love!(*Someday I will get a sponsor and I can show my love*) -->

### Adding new features or fixing bugs

[(Back to top)](#table-of-contents)

<!-- This is to give people an idea how they can raise issues or feature requests in your projects.

You could also give guidelines for submitting and issue or a pull request to your project.

Personally and by standard, you should use a [issue template](https://github.com/navendu-pottekkat/nsfw-filter/blob/master/ISSUE_TEMPLATE.md) and a [pull request template](https://github.com/navendu-pottekkat/nsfw-filter/blob/master/PULL_REQ_TEMPLATE.md)(click for examples) so that when a user opens a new issue they could easily format it as per your project guidelines.

You could also add contact details for people to get in touch with you regarding your project. -->

# License

[(Back to top)](#table-of-contents)

# Footer

[(Back to top)](#table-of-contents)

<!-- Let's also add a footer because I love footers and also you **can** use this to convey important info.

Let's make it an image because by now you have realised that multimedia in images == cool(*please notice the subtle programming joke). -->

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

<!-- Add the footer here -->

<!-- ![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) -->
