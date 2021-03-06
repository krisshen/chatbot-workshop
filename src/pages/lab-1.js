import React from 'react'
import courseImage from '../images/how-to-build-a-chatbot.png'
import serviceCreation from '../images/create-service.png'
import { Link } from 'gatsby'
import { Alert, UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

const Lab1 = () => (
  <Layout>
    <h2>Lab 1: Let's get started</h2>
    <p>
      Welcome to your first hands-on lab. I'm sure you're eager to get started.
      Before we can begin to actually build chatbots, however, we'll need to
      take care of a couple of prerequisites for this workshop.
    </p>
    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Register an account with IBM Cloud;</li>
      <li>Create an instance of Watson Assistant;</li>
      <li>
        Enroll in a Chatbot Course online to obtain a certificate and badge, as
        well as other benefits.
      </li>
      <li>Take your first graded quiz.</li>
    </ol>
    <h3>Task 1: Register with IBM Cloud</h3>
    <Alert color="info">
      If you already registered with IBM Cloud by following the instructions
      sent to you prior to the workshop, you can safely skip this first task and{' '}
      <a href="#task2">jump to Task 2</a>.
    </Alert>
    <p>
      To create chatbots, we'll use IBM Watson Assistant, an easy to use and
      powerful chatbot service offered on the IBM Cloud. So we need to make sure
      that you have an account with the IBM Cloud.
    </p>
    <ol>
      <li>
        <strong>Register with IBM Cloud</strong> by clicking on the button
        below.
        <p style={{ textAlign: 'center', margin: '20px' }}>
          <a
            className="btn btn-primary"
            href="https://cocl.us/CB0103EN_BM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register with IBM Cloud
          </a>
        </p>
      </li>
      <li>
        You'll be asked to log in if you already have an account with IBM.com.
        If you do, log in. If you don't,{' '}
        <strong>
          click on <span className="instruction">Create an account</span>
        </strong>{' '}
        and proceed with the creation of an account with your professional email
        address (or personal, if you prefer).
      </li>
      <li>
        If you created an account in the previous step, you'll be asked to{' '}
        <strong>verify your email</strong>. Check your inbox for the
        verification email (and for good measure, be sure to check your spam
        folder as well, if you don't see the email after a few minutes).
      </li>
      <li>
        <p>
          Upon successful verification of your email, you'll see a{' '}
          <span className="instruction">Log In</span> button.{' '}
          <strong>Click on it and accept the privacy notices</strong>. At this
          point you'll be logged in with your IBM ID. If you're prompted to
          create a Watson Assistant service on a page similar to the image
          below, you are all set and can{' '}
          <strong>
            close your browser tab and jump to <a href="#task2">Task 2</a>.
          </strong>{' '}
          (Technically, you could create a service directly here, skipping the
          first two steps of Task 2, but I want to show you how to reach this
          creation page for future reference.)
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={serviceCreation}
            alt="Creating a Watson Assistant service"
            title="Creating a Watson Assistant service"
            width="700"
          />
        </p>
      </li>
      <li>
        If you weren't redirected to the service creation page, you'll be
        prompted to create an IBM Cloud account, and presented with a page to do
        so.{' '}
        <strong>
          Click on the <span className="instruction">Sign Up</span> button
        </strong>{' '}
        presented to you on the page. [
        <span
          style={{
            color: 'blue',
            fontWeight: 'bold',
          }}
          href="#"
          id="sign-up-not-working"
        >
          Tip
        </span>
        ]
        <UncontrolledTooltip placement="top" target="sign-up-not-working">
          If the <span className="instruction">Sign Up</span> button doesn't
          work, log out and log back in, before trying again.
        </UncontrolledTooltip>
      </li>
      <li>
        You'll see a registration form for IBM Cloud. Considering you likely
        just entered your information to register for an IBM ID, this extra step
        might feel tedious. Thankfully, you can just{' '}
        <strong>enter your email address</strong> and the rest of the form will
        disappear, allowing you to create an IBM Cloud account by simply{' '}
        <strong>
          clicking on the <span className="instruction">Create Account</span>{' '}
          button
        </strong>
        .
      </li>
      <li>
        Check your email once again{' '}
        <strong>
          click on the <span className="instruction">Confirm Account</span>{' '}
          button
        </strong>{' '}
        provided in the confirmation email.
      </li>
      <li>
        Congratulations. You registered and activated your IBM Cloud account.
        Our last step for this task is to <strong>log in</strong> using the
        provided button on the success page you were redirected to.
      </li>
      <li>You're now logged in and should see your (empty) dashboard.</li>
    </ol>
    <h3 id="task2">Task 2: Create an instance of Watson Assistant</h3>
    <p>
      Now that you have an IBM Cloud account, it's time to create an instance of
      IBM Watson Assistant. Visit your{' '}
      <a
        href="https://console.bluemix.net/dashboard/apps/"
        target="_blank"
        rel="noopener noreferrer"
      >
        dashboard
      </a>{' '}
      and then follow these simple steps:
    </p>
    <ol>
      <li>
        <strong>
          Click on the <span className="instruction">Create resource</span>{' '}
          button
        </strong>{' '}
        on your dashboard.
      </li>
      <li>
        <strong>Search for Watson Assistant</strong> in the search field or find
        it in the <span className="instruction">AI</span> category of the
        catalog and then <strong>click on it</strong>.
      </li>
      <li>
        You should see a Watson Assistant (formerly Conversation) creation page
        similar to the image I showed you above. You can leave everything to
        default, or <strong>customize the name to your liking</strong>. If you
        are in New Zealand or Australia,{' '}
        <strong>
          switch the region/location to{' '}
          <span className="instruction">Sydney</span>
        </strong>{' '}
        for optimal performance. It may take up to a minute before the UI will
        allow you to select a different data center. Give it a moment if you
        don't see the option.
      </li>
      <li>
        Take note of the differences between the free Lite plan (which you'll be
        using) and the Standard Plan, towards the end of the page.
      </li>
      <li>
        <strong>
          Click on the <span className="instruction">Create</span> button
        </strong>{' '}
        at the bottom to create your instance.
      </li>
      <li>
        You'll be redirected to the launch page for the service you just
        created.{' '}
        <strong>
          Click on the <span className="instruction">Launch tool</span> button
        </strong>{' '}
        to access the web application that will allow you to create chatbots.
        You'll land on an informative tab.
      </li>
      <li>
        <strong>
          Click on the <span className="instruction">Workspaces</span> tab
        </strong>{' '}
        instead, as it's where we'll be creating chatbots. For quick access in
        future labs,{' '}
        <strong>
          bookmark the <span className="instruction">Workspaces</span> page
        </strong>{' '}
        in your running instance of Watson Assistant.
      </li>
    </ol>

    <p>
      You can always create new services (Watson Assistant or any other service
      available in the catalog) by clicking on the{' '}
      <span className="instruction">Create resource</span> button on your
      dashboard. Your dashboard is accessible at any time by logging in on the
      ibm.com/cloud site, but it takes a few clicks to get there, so I highly
      recommend that you just{' '}
      <strong>
        bookmark the{' '}
        <a
          href="https://console.bluemix.net/dashboard/apps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          dashboard page
        </a>{' '}
        now{' '}
      </strong>{' '}
      instead. It will give you quick access to seeing and managing all the
      resources you created inside of your IBM Cloud account. If you go there
      now, you should see the Watson Assistant service you just created.
    </p>
    <h3>Task 3: Enroll in the Chatbot Course</h3>
    <p>
      <a
        href="https://cognitiveclass.ai/courses/how-to-build-a-chatbot/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={courseImage}
          alt="Chatbot Course banner"
          style={{ float: 'right', margin: '20px' }}
        />
      </a>
      Last year, I created a chatbot course that's been taken by about 50,000
      people around the world. You can think of this workshop as a more in
      depth, up to date, and interactive version of my online course available
      on{' '}
      <a
        href="https://cognitiveclass.ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        CognitiveClass.ai
      </a>
      .
    </p>
    <p style={{ textAlign: 'center' }}>
      <a
        className="btn btn-primary"
        href="https://cognitiveclass.ai/courses/how-to-build-a-chatbot/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Course
      </a>
    </p>
    <p>
      You don't need to take the course, since you're getting the in-person
      workshop which covers the same material and more; however, you should
      still sign up for Cognitive Class and enroll in my course now.
    </p>
    <p>There are a few reason for enrolling:</p>
    <ul>
      <li>
        Being enrolled in the course will enable you to take the quizzes and
        final exam. A passing grade will entitle you to{' '}
        <strong>a badge backed by IBM</strong>, to attest to your ability to
        create chatbots. This badge, digitally issued by Acclaim, can then be
        shared on your LinkedIn profile, other social media sites (a little
        bragging won't hurt anyone), on your CV/résumé, etc.
      </li>
      <li>
        Upon passing the exam, you'll also receive{' '}
        <strong>a digital certificate of accomplishment</strong> from Cognitive
        Class, which you could print if you wished.
      </li>
      <li>
        You'll be given a special coupon code that allows you to receive{' '}
        <strong>US$200 a month worth of Cloud services for six months</strong>{' '}
        (a total value of US$1,200). This can be applied to use many IBM Cloud
        services, including Watson Assistant.
      </li>
      <li>
        You'll receive <strong>a free WordPress testing site</strong> that we'll
        need for the deployment of your chatbot later in the workshop.
      </li>
      <li>
        Once you're registered with Cognitive Class, you can take many other
        courses on Data Science, AI, Containers, Blockchain, and more if you're
        interested. All for free and at your own pace.
      </li>
    </ul>
    <p>
      To register with Cognitive Class and enroll in the Build Your Own Chatbot
      course,{' '}
      <strong>
        click on the <span class="instruction">Start the Free Course</span>{' '}
        button
      </strong>{' '}
      on the{' '}
      <a
        href="https://cognitiveclass.ai/courses/how-to-build-a-chatbot/"
        target="_blank"
        rel="noopener noreferrer"
      >
        course page
      </a>
      .
    </p>
    <p>
      You'll be asked to log in (if you already have a Cognitive Class account)
      or{' '}
      <strong>register with Cognitive Class and then verify your email</strong>{' '}
      (as usual with most services). On the verification page, when you click
      the activation link sent to you by email, you'll be prompted with the
      aforementioned US$1200 special offer. You can safely ignore it for now.
    </p>
    <p>
      Later in the workshop, we'll cover how to obtain the free WordPress
      testing environment for the course you just enrolled in.
    </p>
    <h3>Task 4: Take the Module 1 Quiz</h3>
    <p>
      Head over to the{' '}
      <a
        href="https://courses.cognitiveclass.ai/courses/course-v1:CognitiveClass+CB0103EN+v1/courseware/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Build Your Own Chatbot
      </a>{' '}
      course you just enrolled in and{' '}
      <strong>
        find the <span className="instruction">Graded Review Questions</span>{' '}
        inside Module 1. Take the quiz.
      </strong>{' '}
      There are no trick questions, so go with the answer that appears to be
      most logical to you.
    </p>
    <Alert color="success">
      This concludes your very first lab. On the next one, we'll start getting
      our hands dirty by building our first chatbot components.
    </Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/">
        Back to Introduction
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-2">
        Proceed to Lab 2
      </Link>
    </p>
  </Layout>
)

export default Lab1
