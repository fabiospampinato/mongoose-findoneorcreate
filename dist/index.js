/* FIND ONE OR CREATE */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findOneOrCreate(schema) {
    schema.statics.findOneOrCreate = function findOneOrCreate(find, create) {
        var model = this;
        return new Promise(function (resolve, reject) {
            model.findOne(find, function (err, result) {
                if (err)
                    return reject(err);
                if (result)
                    return resolve(result);
                model.create(create, function (err, result) {
                    if (err)
                        return reject(err);
                    resolve(result);
                });
            });
        });
    };
}
/* EXPORT */
exports.default = findOneOrCreate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esd0JBQXdCOzs7QUFFeEIseUJBQTJCLE1BQU07SUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcseUJBQTJCLElBQUksRUFBRSxNQUFNO1FBRXRFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUcsVUFBRSxPQUFPLEVBQUUsTUFBTTtZQUVwQyxLQUFLLENBQUMsT0FBTyxDQUFHLElBQUksRUFBRSxVQUFFLEdBQUcsRUFBRSxNQUFNO2dCQUVqQyxFQUFFLENBQUMsQ0FBRSxHQUFJLENBQUM7b0JBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRyxHQUFHLENBQUUsQ0FBQztnQkFDakMsRUFBRSxDQUFDLENBQUUsTUFBTyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUcsTUFBTSxDQUFFLENBQUM7Z0JBRXhDLEtBQUssQ0FBQyxNQUFNLENBQUcsTUFBTSxFQUFFLFVBQUUsR0FBRyxFQUFFLE1BQU07b0JBRWxDLEVBQUUsQ0FBQyxDQUFFLEdBQUksQ0FBQzt3QkFBQyxNQUFNLENBQUMsTUFBTSxDQUFHLEdBQUcsQ0FBRSxDQUFDO29CQUVqQyxPQUFPLENBQUcsTUFBTSxDQUFFLENBQUM7Z0JBRXJCLENBQUMsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQTtBQUVILENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsZUFBZSxDQUFDIn0=