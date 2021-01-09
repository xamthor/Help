import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";
import Connection from "../models/connection.model";

const DEBUG = debug("dev");

export default {

  create: async (req, res) => {
    // Validate request
    if(!req.body.connection_user) {
        return res.status(400).send({
            message: "connection user can not be empty"
        });
    }
    
    const connection = new Connection({
    	user_id: req.user.id,
    	connection_user: req.body.connection_user
    });
    connection.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Status.",
        });
    });
},

all: async (req, res) => {
    Connection.find({ user_id: req.user.id }).populate('connection_user').limit(10)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
},

topfive: async (req, res) => {
    Connection.find({user_id: req.user.id ,  star: true }).limit(5)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
},

add: async (req, res) => {
    let count = await Connection.where({ user_id: req.user.id, star: true }).count().then(data => {
        return data;
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
    if (count > 5) {
        res.send({
            message: "You reach the limit"
        });
    }else{
        Connection.where({ _id: req.body.connection_user}).update({star: true})
        .then(data => {
            res.send({message: "succes" ,data: data, count: count});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    }
    
},

remove: async (req, res) => {

    Connection.find({ _id: req.body.connection_user }).limit(5).update({ star: false})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
},

};