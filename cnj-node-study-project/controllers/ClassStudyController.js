const { ClassStudyService } = require('../services/index');


const classStudy = async (req, res, next) => {

    let food = new ClassStudyService.Food(4, 1);
    food.get();
    let foodGroup = new ClassStudyService.FoodGroup('g', 2);
    foodGroup.log();

    return res.status(200).json({
        message: "success"
    });
}

module.exports = {
    classStudy
}