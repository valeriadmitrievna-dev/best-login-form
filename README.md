# 🛡️ Simple Login Form

## 🤔 What's the matter?

A test task for the Evil Martians company. It involves sharing a ready-made login form code or creating a new one. Due to the fact that I've been working on closed projects (not open source) for the last few years, I can't share code from work projects (either because it's not allowed, or because I haven't saved anything). I don't have time for pet projects (and I really regret it, because I have ideas, and I like to code sometimes outside of work, though I quickly give it up), so I made this form now from scratch, just like that, threw it together quickly.

## 🛠️ Tech Stack

In fact, you could just look at the package.json file, but I decided it would be easier to get acquainted with the stack if it was neatly organized into a list:

**☑️ FSD**  
**☑️ vite**  
**☑️ React, TypeScript**  
**☑️ scss-modules, classnames**  
**☑️ react-router-dom**

## 📢 Specific points that I would like to comment on.

### 🟪 FSD: Features

When I first started working with FSD, it was always not entirely clear to me what is a feature and what is a widget. Over the course of my work, I realized that it mostly depends on how your lead sees it, although there are basic rules for what should be where. I don't claim that my decision to place forms in features was 100% correct _(because, for example, on the last project, my lead placed similar things in widgets)_, but I decided to place them there because, well, it's a feature. For me, a widget is something more complex, possibly consisting of several features.

### 🟪 Mocked Requests

You indicated that I can mockup `fetch()` for requests, but I hope this will not be a problem that I used the custom hook useMutate(). Professional deformation, worked too much with `RTK Query` and `tanstack-query`.

### 🟪 Color Variables and Typography Mixins

I do not exclude the fact that you can name the variables differently, but for me it mostly depends on the designer and design that he provides _(if it is a good designer, he creates a block of variables in the design system in which he works and they already have names)_.  
The situation is similar for typography - I used few typography variations because this is a quick project, a test task. In a working project, the designer provides all the necessary typography and there is more of it. In general, I just did not want you to judge strictly because of the typography variations.

### 🟪 Type FormFieldState for storing the state of input fields

I'll be honest with you _(although, as absurd as it may sound, I've been told that this is not the best strategy when you want to gain the trust of a potential employer)_, this is not the first time when creating fields with validation I thought "should I make a bunch of states for values ​​and errors, or make one state for each field but as an object?" and yes, for performance it is better to store the state in simpler types, but for such a simple project it is not scary to use two objects. I don't know how to describe exactly why I chose this solution, I just felt this way _(I know that most likely it sounds terribly unprofessional)_.

### 🟪 Sorted Imports

When I was a young junior, I considered it absurd to require leads to sort imports in alphabetical order _(I didn’t know that this was a completely automated task)_, but now it’s almost a must-have for me _(like the prettier configuration)_ that helps bring the project code to a unified form and reduces the number of unnecessary conflicts during merging.

### 🟪 SCSS-modules Preprocessor Options

We are talking about this piece of code:

```
...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/shared/styles/colors";
          @use "@/shared/styles/radius";
          @use "@/shared/styles/spacing";
          @use "@/shared/styles/typography";
        `,
      },
    },
  },
...
```

I had three options on how to proceed:

1. A very default way - import each file with variables into the required style file
2. Create a `_common.scss` file in which the files with styles will be re-exported via `@forward` (like `index.ts`) and import it everywhere.
3. In the preprocessor settings, add the necessary imports to the beginning of each scss file

And to be honest, I think the solution I chose (3) is very elegant and simplifies further development, eliminating a bunch of imports at the beginning of each scss file.

Actually, it could be made even simpler:

```
...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/shared/styles/colors" as *;
          @use "@/shared/styles/radius" as *;
          @use "@/shared/styles/spacing" as *;
          @use "@/shared/styles/typography" as *;
        `,
      },
    },
  },
...
```

And then you wouldn't need to write prefixes like `colors.$text-primary`, instead just `$text-primary`, but I don't think it's very safe.
