import dicussion from "../assets/json/dicussions.json";
class DicussionService {
    fetchDicussion() {
        return JSON.parse(localStorage.getItem('dicussion'));
    }

    updateDicussion(chat,reply) {

      var dicussion =  JSON.parse(localStorage.getItem('dicussion'));

        let updatedTasks = dicussion.map((todo) => {
            const tempTodo = { ...todo };
            if (tempTodo.id === chat.id) {
                tempTodo.reply.push(reply);
                return tempTodo
            } else {
                return tempTodo
            }
        });

        localStorage.setItem('dicussion', JSON.stringify(updatedTasks));
        return JSON.parse(localStorage.getItem('dicussion'));
    }
}

export default new DicussionService();