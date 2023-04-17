import apollo from '../assets/image/apolloicon.svg'
import chakraui from '../assets/image/chakrauiicon.svg'
import express from '../assets/image/expressicon.svg'
import mongo from '../assets/image/mongoicon.svg'
import node from '../assets/image/nodeicon.svg'
import react from '../assets/image/reacticon.svg'
import socketio from '../assets/image/socketioicon.svg'
import mysql from '../assets/image/mysqlicon.svg'
import handlebars from '../assets/image/handlebarsicon.svg'
import godot from '../assets/image/godoticon.svg'

export const projects = [
    {
        id: 'kitchengoblin',
        name: 'Kitchen Goblin',
        blurb: `A recipe book web application and sharing platform built within a MERN stack.`,
        gitUrl: `https://github.com/charlestietjen/trilogy-project-3-kitchen-goblin`,
        deployUrl: `http://kitchen-goblin.lowlevelgoblin.com`,
        image: `kitchen-goblin.png`,
        icons: [{
            src: react,
            label: 'React'
        },
        {
            src: node,
            label: 'Node.js'
        },
        {
            src: express,
            label: 'Express.js'
        },
        {
            src: mongo,
            label: 'MongoDB'
        },
        {
            src: apollo,
            label: 'Apollo GraphQL'
        },
        {
            src: chakraui,
            label: 'Chakra UI'
        }],
    },
    {
        id: 'goblinrunner',
        name: 'Goblin Runner',
        blurb: 'Goblin Runner is a 2D infinite runner game built in Godot game engine.',
        gitUrl: `https://github.com/charlestietjen/goblin-runner/`,
        deployUrl: `http://charlestietjen.ca/goblinrunner`,
        image: `goblin-runner.png`,
        icons: [{
            src: godot,
            label: 'Godot Game Engine'
        }]

    },
    {
        id: 'notdiscord',
        name: 'Not-Discord/Goblin Hours',
        blurb: 'A server/client bundle for a simple text/emoji only chat service built using React, Socket.io and Express.',
        gitUrl: `https://github.com/charlestietjen/Socket-Chat-Project/`,
        image: `not-discord.png`,
        icons: [{
            src: react,
            label: 'React'
        },
        {
            src: socketio,
            label: 'Socket IO'
        },
        {
            src: express,
            label: 'Express.js'
        },
        {
            src: node,
            label: 'Node.js'
        }],
    },
    {
        id: 'spacedout',
        name: `SpacedOut - Group Project 2`,
        blurb: `Mental health focused anonymous social media platform.`,
        gitUrl: `https://github.com/charlestietjen/Trilogy-Group-Project-2-SpacedOut`,
        image: `spaced-out.png`,
        icons: [{
            src: handlebars,
            label: 'Handlebars'
        },
        {
            src: mysql,
            label: 'MySQL'
        },
        {
            src: node,
            label: 'Node.js'
        },
        {
            src: express,
            label: 'Express.js'
        },],
    }
]