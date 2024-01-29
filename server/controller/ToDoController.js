const ToDoModel = require("../models/ToDoModels");

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find();
    res.send(toDos);
}


module.exports.saveToDo = async (req, res) => {
    const { toDo } = req.body;

    ToDoModel.create({ toDo })
        .then(data => {
            console.log("Saved successfully......");
            res.status(201).send(data);
        })
        .catch(err => {
            console.log(err);
            res.send({ error: err, msg: "Something Went Wrong in save..." })
        })

}

module.exports.updateToDo = async (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;

    ToDoModel.findByIdAndUpdate(id, { toDo })
        .then(() => {
            console.log("Update successfully......");
            res.send("Updated Sucessfully.....");
        })
        .catch(err => {
            console.log(err);
            res.send({ error: err, msg: "Something Went Wrong in update..." })
        })


}

module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params;


    ToDoModel.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted successfully......");
            res.send("Deleted Sucessfully.....");
        })
        .catch(err => {
            console.log(err);
            res.send({ error: err, msg: "Something Went Wrong in Delete..." })
        })


}

