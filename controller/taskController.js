const taskModel = require('./../model/tasks');

exports.createTask = async (req, res, next) => {
    try {
        if (req.body.name === undefined) {

            return next(new Error('body is empty'));
        }
        const newTask = await taskModel.create({ name: req.body.name });
        res.status(201).json({ message: 'success', data: newTask });
    } catch (e) {
        res.status(500).json({ message: 'Something bad occured', error: e });
    }

}

exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json({ message: 'success', data: tasks, totalData: tasks.length });
    } catch (e) {
        res.status(500).json({ message: 'Something bad occured', error: e });
    }
}

exports.deleteAllTasks = async (req, res, next) => {
    try {
        await taskModel.deleteMany();
        res.status(204).json({ message: 'success' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something bad occured', error: e });
    }
}