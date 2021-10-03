# Meeting 2021/09/29
Attendees: Sonia, Sebastian, Matias, Samarth

## Agenda: 

1. Discuss preliminary project development plan: 
- We need a high level overview with 3-4 milestones that should seem plausible in the eyes of the industry partner. 
- Discuss how we are reaching out to industry partners to get feedback / assign someone for this. 
- What are each team member's responsibilities for reaching each milestone?
2. Discuss the tech stack
- What do we have to do and how are we satisfying those requirements?
- Take notes on what we decided against in terms of stack and why
3. Discuss implementing the tech stack 
- How to create a container
- README.md instructions
4. Share with everyone GitHub repo Sonia created: 
- https://github.com/SoniaZaldana/covid19-reporting 


## Minutes: 
### Tech stack discussion: 
- Building a React app and use react-bootstrap (https://react-bootstrap.github.io/) for UI. 
- A reason for choosing React is because most of the team has had some exposure with React and feel somewhat comfortable. 
- We could have done it with pure HTML, CSS and Javascript but React has the following benefits: allows you to create reusable components, which might be useful if they choose to pick up our project and extend it and easy to pick up if you haven't done it in a while.
- We could use axios as an HTTP client: https://github.com/axios/axios
- Otherwise, we could use a pure javascript fetch. 
- Containerization with Docker: Samarth and Sebastian have some experience with Docker, so they might be able to help out in this regard. 
- The container will make sure that we can build everything and run automatically in one step. 


### Project Development Plan Discussion: 

#### Milestone 0: 
- Set up a container with a toy app that outputs “I am running” and basic testsuite. This is not really a milestone, as it is what we need to do for A1. 
#### First Milestone: 
- We are able to convert the XML to JSON
- Write tests to verify conversion
#### Second Milestone: 
- Rendering the UI and validation logic in line with FHIR specification.
#### Third Milestone: 
- Using the HTTP client to POST to the server
- Write ensuing tests with GET requests to ensure our form was posted successfully 
#### Other things pertaining to development plan
- We’re sticking to the weekly meetings on Tuesdays prior to our meeting with the TA. 
- Github Branch Distribution: main is production (only merge prior to deadline in course) and develop is our development branch 
- Need 1 review per branch before merging. 


### Work Distribution Discussion: 
- Samarth: Can get the container up and running along with boilerplate “create react app” and adding a print line to say “I’m running!”
- Sonia: Add meeting minutes as individual folders and finish up composing the report with what we discussed today.Also needs to add everyone as collaborators to the repo. 
- Sebastian: Github graph + setting up GitHub environment. 
- Matias: Can review Samarth’s setup and review full contents on Monday. 

### Questions for Alex: 
- How do we test that what we converted is correct / what the server was expecting. 
