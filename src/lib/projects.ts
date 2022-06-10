export const projects = [
    {
        name: 'Kitchen Goblin',
        blurb: `Kitchen Goblin is a recipe book platform that allows for iterative recipe storage.

        Each recipe a user stores is capable of storing variations as "Cooks" that may contain differing ingredient lists, directions and miscellaneous notes.
        
        Recipes may also be listed publically or privately. Publically listed recipes will display for all users, logged in or not where as privately listed recipes are only visible to the owning user.`,
        gitUrl: `https://github.com/charlestietjen/trilogy-project-3-kitchen-goblin`,
        deployUrl: `http://kitchen-goblin.lowlevelgoblin.com`
    },
    {
        name: 'Not-Discord/Goblin Hours',
        blurb: 'A server/client bundle for a simple text/emoji only chat service built using React, Socket.io and Express. No chat history is saved currently and the application is quite bare bones, being primarily a learning project. MongoDB support to be added later utilizing Mongoose.',
        gitUrl: `https://github.com/charlestietjen/Socket-Chat-Project/`,
        deployUrl: `https://not-discord-chat-server.herokuapp.com/`
    },
    {
        name: `SpacedOut - Group Project 2`,
        blurb: `Metal health focused 'anti'-social media platform. SpacedOut allows a signed in user to post a thought or feeling with an attached emotion from a preset list.
        
        Back end built using Node, Express and a SQL database managed by Sequelize and MySQL2. The front end is served views and partials using handlebars.
        
        SpacedOut also provides session based user authentication and user information is encrytped when stored.`,
        gitUrl: `https://github.com/charlestietjen/Trilogy-Group-Project-2-SpacedOut`,
        deployUrl: `https://spaced-problems.herokuapp.com/`
    }
]