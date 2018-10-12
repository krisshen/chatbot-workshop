import React from 'react'
import { Link } from 'gatsby'
import { Alert, UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

import chitchat from '../images/chitchat-nodes.png'
import simpleHours from '../images/simple-hours.png'
import hoursChildNode from '../images/hours-location-provided.png'
import hoursOfOperation from '../images/hours-of-operation.png'

const Lab4 = () => (
  <Layout>
    <h2>Lab 4: Dialog Flow</h2>
    <p>
      With intents and entities under our belts, we can finally look at the
      third component: the dialog.
    </p>
    <p>
      In fact, at this point, our chatbot can understand some intents and detect
      a few specific pieces of information thanks to entities. What we are
      missing is using this information to formulate appropriate responses to
      the user. Will do so in this lab to create a simple, but useful chatbot.
    </p>
    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>
        Create a useful chatbot that leverages the intents and entities we
        created so far;
      </li>
      <li>Better understand how the dialog flow and responses work.</li>
      <li>
        Test our chatbot in the <span className="instruction">Try it out</span>{' '}
        panel.
      </li>
      <li>Take your third graded quiz.</li>
    </ol>
    <h3>Task 1: Create a Dialog and improve the prompt</h3>
    <p>
      Let's kick things off by creating a dialog and a good prompt for our
      chatbot.
    </p>
    <ol>
      <li>
        <strong>
          Click on the <span className="instruction">Dialog</span> section
        </strong>{' '}
        of your workspace.
      </li>
      <li>
        It's empty at the moment. Go ahead and{' '}
        <strong>
          click the <span className="instruction">Create</span> button
        </strong>
        .
      </li>
      <li>
        Take a moment to{' '}
        <strong>
          investigate the default <span className="instruction">Welcome</span>{' '}
          and <span className="instruction">Anything else</span> nodes
        </strong>{' '}
        that were generated.
      </li>
      <li>
        <strong>
          Open the <span className="instruction">Try it out</span>{' '}
        </strong>{' '}
        panel and click on the <span className="instruction">Clear</span> link
        at the top to start testing the chatbot from scratch. Notice anything
        different this time around?
      </li>
      <li>
        Yes, we have a prompt! Unfortunately, the default phrasing is not very
        user friendly. Let's change it. Select the{' '}
        <span className="instruction">Welcome</span> node and edit the response
        to say{' '}
        <code>
          Hello. My name is Florence and I'm a chatbot. How can I help you? You
          can ask me about our store hours and locations.
        </code>{' '}
        Change the name from Florence, to whatever flower-inspired name you
        prefer, to make it yours.
      </li>
      <li>
        <p>
          Click the <span className="instruction">Clear</span> link in the{' '}
          <span className="instruction">Try it out</span> panel once again to
          see the change take effect.
        </p>
        <p>
          Great. We added a bit of antropomorphization, set the expectations
          right by coming clean about our robot nature, and offered some
          guidance to the user, in terms of the scope offered by our chatbot.
        </p>
      </li>
      <li>
        Now try replying <code>hello</code> in the{' '}
        <span className="instruction">Try it out</span> panel. What happens?
        Watson recognized the right intent but doesn't have a node to handle
        greetings, so the fallback node{' '}
        <span className="instruction">Anything else</span> was executed. We'll
        remedy to this in the next task.
      </li>
    </ol>
    <h3>Task 2: Add nodes for chitchat</h3>
    <p>
      We have three chitchat intents, <code>#greetings</code>,{' '}
      <code>#thank_you</code>, and <code>#goodbyes</code>. We now need to have
      nodes that specify what reponse we want to give the user, when such
      intents are detected.
    </p>
    <p>
      We have a couple of strategies possible here. We could create three nodes,
      one for each of these intents. This is the most common and simple
      approach. The other option would be to create a single node for chitchat
      that uses multiple responses (essentially, conditional responses),
      attaching a condition to each response.
    </p>
    <p>
      I would recommend that you stick to the traditional way as it's more
      flexible. It allows us to add more chitchat nodes down the line, as well
      as making the chitchat logic more complex if needed.
    </p>
    <p>
      We want to keep things organized, separating small talk from
      domain-specific nodes. So we'll create a folder for chitchat, and we'll
      create three nodes in it for now. The picture below shows the end result.
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={chitchat}
        alt="Our chitchat nodes"
        title="Our chitchat nodes"
        width="900"
      />
    </p>
    <p>Follow these steps to add it to your chatbot:</p>
    <ol>
      <li>
        Select the <span className="instruction">Welcome</span> node and then{' '}
        <strong>
          click the <span className="instruction">Add folder</span> button
        </strong>
        . This will create a folder underneat the selected node (i.e.,{' '}
        <span className="instruction">Welcome</span>
        ).
      </li>
      <li>
        <strong>
          Name the folder <code>Chitchat</code>
        </strong>
        . You don't need to specify a condition for the folder, as the
        conditions of the children nodes will suffice.
      </li>
      <li>
        With the <span className="instruction">Chitchat</span> folder selected,{' '}
        <strong>
          click the <span className="instruction">Add child node</span> button
        </strong>
        . This will create an empty child node within the folder.
      </li>
      <li>
        <strong>
          Name this node <code>Greetings</code>
        </strong>
        . We want it to be executed when the <code>#greetings</code> intent is
        detected, so under{' '}
        <span className="instruction">If bot recognizes:</span>{' '}
        <strong>
          enter the
          <code>#greetings</code> intent
        </strong>
        . Autocomplete will help you find the intent (not that useful here, but
        quite handy in complex chatbots with many intents.)
      </li>
      <li>
        <p>
          <strong>Enter a few appropriate responses</strong>. The scenario we
          are handling here is one in which we already greeted the user with our
          prompt, and they replied with a greeting. So we should greet them back
          without repeating the prompt verbatim.
        </p>

        <p>
          <strong>Enter a few responses to offer some variation</strong> if we
          get a greeting-happy user. Examples, could be{' '}
          <code>Hi there. How can I help you?</code>,{' '}
          <code>Hello. How may I assist you today?</code>,{' '}
          <code>Hi. What can I help you with?</code>.
        </p>

        <p>
          Normally, I would advise against open-ended questions such as how can
          I help you, but since we already qualified the scope of the chatbot in
          our prompt, we can get away with it here.
        </p>
      </li>
      <li>
        You can leave the response variations set to{' '}
        <span className="instruction">sequential</span> or set them to{' '}
        <span className="instruction">random</span> if you prefer. The third
        option, <span className="instruction">multiline</span> is not applicable
        here, as it would provide a response over multiple lines using each
        response you wrote as its own line, de facto asking the user what is
        essentially, the same question three times at once. 😄
      </li>
      <li>
        After this reponse to the user, we expect them to enter some more
        questions, so you can also{' '}
        <strong>
          leave <span className="instruction">Wait for user input</span>
        </strong>{' '}
        as the final action when executing this node, in the{' '}
        <span className="instruction">And finally</span> section at the bottom
        of the node.
      </li>
      <li>
        Open the <span className="instruction">Try it out</span> panel (if you
        closed it) and click the <span className="instruction">Clear</span> link
        to start a new conversation.{' '}
        <strong>
          Try to reply <code>hi</code> to the chatbot prompt
        </strong>
        . Congratulations, you just had your first conversation with our
        chatbot. It's not a complex interaction, but it's a start.
      </li>
      <li>
        You can close the panel as well as the{' '}
        <span className="instruction">Greetings</span> node (by pressing on the
        big X next to <span className="instruction">Customize</span> link within
        the node).
      </li>
      <li>
        <p>
          With the <span className="instruction">Greetings</span> node selected,{' '}
          <strong>
            click on the <span className="instruction">Add node</span> button
          </strong>
          . This will create an empty peer node below{' '}
          <span className="instruction">Greetings</span>.
        </p>
        <p>
          The order of these chitchat nodes is not that important because they
          are all simple nodes with independent intents. However, order can
          matter in more complex scenarios (as we'll see in a moment) and it
          makes sense to place them in a logical manner that is roughly
          equivalent to how a conversation would go. Greetings first, thank yous
          in the middle, and goodbyes at the end.
        </p>
        <p>
          Go ahead and make this node{' '}
          <strong>
            handle the <code>#thank_you</code> intent
          </strong>
          . For the responses, you'll likely want something like{' '}
          <code>
            You're welcome. Please let me know if you need anything else.
          </code>
          , <code>My pleasure.</code>,{' '}
          <code>
            No problem. Let me know if there is anything else I can help with.
          </code>{' '}
          You could get chicky, and say, <code>I aim to please. 😊</code>{' '}
          depending on how much personality you'd like to inject in your
          chatbot. BTW, yes, emojis are supported.
        </p>
      </li>
      <li>
        <strong>
          Repeat the process for the <code>Goodbyes</code> node
        </strong>{' '}
        which will handle the <code>#goodbyes</code> intent. You can use
        standard polite goodbye responses (like{' '}
        <code>Nice talking to you today.</code>,<code>Have a nice day.</code>,{' '}
        <code>Goodbye.</code>
        etc.)
      </li>
      <li>
        Start a new conversation in the{' '}
        <span className="instruction">Try it out</span> panel and{' '}
        <strong>test all three intents</strong> to ensure you get an appropriate
        response in each case.
      </li>
    </ol>
    <h3>Task 3: Respond to hours of operation</h3>
    <p>
      Chitchat interactions are necessary to make our chatbot more pleasant and
      human-like. However, what makes the chatbot actually useful is its ability
      to answer domain specific questions. That is, business related questions.
    </p>
    <p>
      We defined intents for people enquiring about hours of operation and
      addresses of our fictional florist chain, and even created an entity to be
      able to provide location-specific answers. However, much like the chitchat
      intents, intents alone don't offer responses to customers. We'll need to
      create nodes to handle these two business specific intents.
    </p>
    <h4>Create the parent node</h4>
    <p>
      We'll start by creating a node for hours of operation. Follow these steps:
    </p>
    <ol>
      <li>
        <strong>
          Select the <span className="instruction">Welcome</span> node
        </strong>{' '}
        and{' '}
        <strong>
          click on <span className="instruction">Add node</span>
        </strong>
        . This will create an empty node just below the first node.
      </li>
      <li>
        Set the node name to <code>Hours of Operation</code> and use{' '}
        <code>#hours_info</code> for the condition of the node. This will ensure
        that the node will be executed when the user is enquiring about shop
        hours.
      </li>
      <li>
        <p>
          In the response, enter{' '}
          <code>
            Our hours of operations are listed on &lt;a
            href="https://example.org/hours/"&gt;this page&lt;/a&gt;.
          </code>
          Next, head over to the <span className="instruction">Try it out</span>{' '}
          panel and test that it works by asking{' '}
          <code>when is your Auckland store open?</code> as shown in the picture
          below.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={simpleHours}
            alt="Testing our Hours of Operation node"
            title="Testing our Hours of Operation node"
            width="900"
          />
        </p>
      </li>
    </ol>
    <p>
      This works and it provides a somewhat useful answer to the user (assuming
      we are pointing them to a page with the right information listed).
      However, it feels... not very smart.
    </p>
    <p>
      After all, the user asked us about a specific location. We even detected
      it with the <code>@location</code> entity. And then proceeded to ignore
      it, opting instead for a generic answer. We can do better than that. Close
      the <span className="instruction">Try it out</span> panel to gain some
      breathing room as we work on the dialog.
    </p>
    <p>
      In order to handle this case properly, we'll have to consider two possible
      scenarios. One in which a location is specified and one in which the user
      just asks about hours of operation in general without indicating a city
      (or at least a city in which we operate).
    </p>
    <p>
      This is a classic use case for children nodes. We'll use our current node
      to capture the hours of operation request, and then jump to the children
      nodes to decide how to handle the request.
    </p>
    <h4>Create the Location Provided child node</h4>
    <ol>
      <li>
        Delete the response from our{' '}
        <span className="instruction">Hours of Operation</span> node by clicking
        on the bin icon in the response section in the{' '}
        <span className="instruction">Then respond with:</span> section. We do
        that because we don't want this parent node to provide the answer. We'll
        let the children node decide what's the right response.
      </li>
      <li>
        With the <span className="instruction">Hours of Operation</span> node
        selected, click on <span className="instruction">Add child node</span>.
        This creates the first child node. We'll use it for the case of the user
        providing us a specific location. So go ahead and name it{' '}
        <code>Location Provided</code>.
      </li>
      <li>
        Set the condition to <code>@location</code>, as we want to execute this
        node only if the user is enquiring about hours of operation and a
        specific location was given.
      </li>
      <li>
        We need a way to offer a different response for each city, so we need to
        enable <span className="instruction">Multiple responses</span>. To do
        so, click on the <span className="instruction">Customize</span> link
        within our child node. Switch on{' '}
        <span className="instruction">Multiple responses</span> and click{' '}
        <span className="instruction">Apply</span>. You'll notice that now we
        have the ability to set a condition before a response is issued.
      </li>
      <li>
        <p>
          Go ahead and create a series of responses for each different city. In
          the <span className="instruction">If bot recognizes</span> column
          you'll want to enter the specific city (e.g.,{' '}
          <code>@location:Auckland</code>) and in the response the hours of our
          fictional flower shop location. (e.g.,{' '}
          <code>
            Our Auckland store is open Monday to Saturday from 9 am until 6 pm,
            except statutory holidays.
          </code>
          ) Do the same for every other location we have (come up with fictional
          hours of operation, it is after all a fictional chain of shops). The
          end result is shown in the image below.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={hoursChildNode}
            alt="Our child node to handle hours of operations specific to a location"
            title="Our child node to handle hours of operations specific to a location"
            width="900"
          />
        </p>
      </li>
    </ol>
    <p>
      It's worth noting that if the hours of operations where the same for all
      locations, we could have saved the trouble of switching to multiple
      responses and simply included <code>@location</code> in our response.
      (e.g.,{' '}
      <code>
        Our @location store is open Monday to Saturday from 9 am until 6 pm,
        except statutory holidays.
      </code>
      ) This would automatically output the detected entity value back to the
      user in the response. So when enquiring about Sydney, the user would
      receive the response{' '}
      <code>
        Our Sydney store is open Monday to Saturday from 9 am until 6 pm, except
        statutory holidays.
      </code>{' '}
      Of course, if stores have different hours of operation, we have no choice
      but opt for the mulitple response approach like we did here.
    </p>
    <h4>Create the No Location child node</h4>
    <p>
      We now have have a child node to handle users asking about hours of
      operation for a specific location. However, we also need a child node to
      handle the case in which the user didn't specify a location.
    </p>
    <ol>
      <li>
        With the <span className="instruction">Location Provided</span> node
        selected, click the <span className="instruction">Add node</span> button
        to add a sibiling node below it.
      </li>
      <li>
        <p>
          Call this node <code>No Location</code>. Set the condition to{' '}
          <code>true</code>. Here is why. When the user asks{' '}
          <em>What are your hours of operation?</em> the{' '}
          <code>#hours_info</code> intent is detected, so we enter the parent
          node <span className="instruction">Hours of Operation</span>. The{' '}
          <span className="instruction">Location Provided</span> child node is
          then first evaluated. We fail its <code>@location</code> condition,
          because the user didn't specify any location, so the next child node
          is considered for execution. Since the condition is set to{' '}
          <code>true</code> it will always be executed. This is exactly what we
          want to happen since at this point we know the user wants to know the
          hours of operation but no location was provided. (If we left the
          condition empty, we'd get an error because no children node handled
          the user request.)
        </p>
        <p>
          Note also that this is why the order of nodes can matter (it didn't
          for chitchat nodes, but it does here). If we revers the order and
          place the <span className="instruction">No Location</span> node first,
          its <code>true</code> condition is always satisfied and the{' '}
          <span className="instruction">Location Provided</span> node will be
          overshadowed and never executed. We always want to place the most
          specific condition at the top, with the more generic condition nodes
          at the bottom as catch all.
        </p>
      </li>
      <li>
        We need a generic answer for when no location is specified, so go ahead
        and reuse the message we had originally.{' '}
        <code>
          Our hours of operations are listed on &lt;a
          href="https://example.org/hours/"&gt;this page&lt;/a&gt;.
        </code>
      </li>
      <li>
        Before we can test it all out, we need to make sure that the parent node
        (i.e., <span className="instruction">Hours of Operation</span>) hands
        off control to the children nodes. Select the parent node, and you'll
        notice that the <span className="instruction">And finally</span> section
        is set to <span className="instruction">Wait for user input</span>. This
        is not what we want. The user has already provided us with the question
        and we haven't responded yet. Change this section of{' '}
        <span className="instruction">Hours of Operation</span> to{' '}
        <span className="instruction">Skip user input</span>. This will hand off
        the excution to the two children nodes we just created.
      </li>
      <li>
        If you click on the <span className="instruction">Try it</span> button
        and type, <code>What are your hours of operation for Melbourne?</code>{' '}
        you should see a response specific to that city. If you try,
        <code>What are your hours of operation?</code> you'll should get our
        generic response with a link to the city hours, as shown in the image
        below.
      </li>
    </ol>
    <p style={{ textAlign: 'center' }}>
      <img
        src={hoursOfOperation}
        alt="Testing our children nodes for Hours of Operation"
        title="Testing our children nodes for Hours of Operation"
        width="900"
      />
    </p>
    <h3>Task 4: Respond to location information</h3>
    <h3>Task 5: Take the Module 3 Quiz</h3>
    <p>
      Head over to the{' '}
      <a
        href="https://courses.cognitiveclass.ai/courses/course-v1:CognitiveClass+CB0103EN+v1/courseware/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Build Your Own Chatbot
      </a>{' '}
      course and{' '}
      <strong>
        find the <span className="instruction">Graded Review Questions</span>{' '}
        inside Module 3.
      </strong>
    </p>
    <p>
      Note, that the course builds a similar flower shop chatbot as well, but
      the course version is slightly different from the one we are developing in
      this workshop. In order for you to successfully pass the quiz, please take
      note of the following:
    </p>
    <ul>
      <li>
        That flower shop chatbot has chitchat intents (like ours) but also a{' '}
        <code>#flower_suggestions</code> intent which is used to capture users
        who ask for flower recommendations. (e.g.,{' '}
        <em>I'd like to buy flowers</em>,{' '}
        <em>What flowers should I buy for my sister?</em>)
      </li>
      <li>
        The flower shop in the course has the same <code>@relationship</code>{' '}
        entity like the one we imported in the previous lab. If you click on
        that entity in our chatbot, you'll notice that it includes entity values
        like <code>@relationship:husband</code>, <code>@relationship:wife</code>
        , etc. The course chatbot uses them to detect the relationship of the
        user with the flower receiver along with the intent for{' '}
        <code>#flower_suggestions</code>.
      </li>
      <li>
        You'll notice that some relationships have a syonym. For example,{' '}
        <code>mom</code> is a synonym for the entity value{' '}
        <code>@relationship:mother</code> and <code>dad</code> is a synonym for{' '}
        <code>@relationship:father</code>.
      </li>
    </ul>
    <p>
      <strong>Take the quiz</strong>, just like you did in the previous module.
      As a reminder, there are no trick questions, so go with the answer that
      appears to make most sense to you.
    </p>
    <Alert color="success">
      We have a small, useful chatbot (if a basic one). In the next lab, we'll
      deploy it to a WordPress site.
    </Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-3">
        Back to Lab 3
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-5">
        Proceed to Lab 5
      </Link>
    </p>
  </Layout>
)

export default Lab4
