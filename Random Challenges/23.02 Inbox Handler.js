function solution1(num_of_messages, actions_list) {
    // Not worrying about message not being in the proper "box"
    // Considering we don't have invalid action_id's
    
    /*
    Create the object with all the message ID's
    Iterate through the action_list and update the VALUE of each KEY to represent the specified action.
    
    Define 3 empty arrays.
    Iterate through the object and save each entry to their respective BoxArray
    
    Format the output
    
    */
    
    const UNREAD = "UNREAD"
    const READ = "READ"
    const TRASH = "TRASH"
    
    const messages = {}
    for (let i = 1; i <= num_of_messages; ++i) {
        messages[i] = UNREAD
    }
    // console.log("messages: ", JSON.stringify(messages))
    
    const actions = actions_list.map(action => {
        const startIndex = action.indexOf(":") + 1
        const endIndex = action.indexOf(",")
        const actionId = action.substring(startIndex, endIndex)
        
        const messageId = action.substring(action.indexOf("message_id") + 11)
        
        return {
            action_id: actionId,
            message_id: messageId,
        }
    })
    
    // console.log(JSON.stringify(actions))    
    
    actions.forEach(action => {
        switch(action.action_id) {
            case "1":
                messages[action.message_id] = READ
                break
            case "2":
            case "3":
                messages[action.message_id] = TRASH
                break
            case "4":
                messages[action.message_id] = READ
                break
            deafult:
                // do nothing.
                break
        }
    })
    
    // console.log("messages: ", JSON.stringify(messages))
    
    const unreadBox = []
    const readBox = []
    const trashBox = []
    
    
    Object.entries(messages).forEach(([messageId, box]) => {
        switch (box) {
            case UNREAD:
                unreadBox.push(messageId)
                break
            case READ:
                readBox.push(messageId)
                break
            case TRASH:
                trashBox.push(messageId)
                break
            deafult:
                break // do nothing
        }
    })
    
    const unreadOutput = "UNREAD:".concat(unreadBox.length ? unreadBox.join(",") : "EMPTY")
    const readOutput = "READ:".concat(readBox.length ? readBox.join(",") : "EMPTY")
    const trashOutput = "TRASH:".concat(trashBox.length ? trashBox.join(",") : "EMPTY")
    
    
    
    return [
        unreadOutput,
        readOutput,
        trashOutput
    ]
}


function solution(num_of_messages, actions_list) {
    const UNREAD = "UNREAD"
    const READ = "READ"
    const TRASH = "TRASH"
    
    const messages = {}
    for (let i = 1; i <= num_of_messages; ++i) {
        messages[i] = UNREAD
    }
    // console.log("messages: ", JSON.stringify(messages))
    
    const actions = actions_list.map(action => {
        const startIndex = action.indexOf(":") + 1
        const endIndex = action.indexOf(",")
        const actionId = action.substring(startIndex, endIndex)
        
        const messageId = action.substring(action.indexOf("message_id") + 11)
        
        return {
            action_id: actionId,
            message_id: messageId,
        }
    })
    
    // console.log(JSON.stringify(actions))    
    
    actions.forEach(action => {
        switch(action.action_id) {
            case "1":
                messages[action.message_id] = READ
                break
            case "2":
            case "3":
                messages[action.message_id] = TRASH
                break
            case "4":
                messages[action.message_id] = READ
                break
            deafult:
                // do nothing.
                break
        }
    })
    
    // console.log("messages: ", JSON.stringify(messages))
    
   const mailBox = {
        unreadBox: {},
        readBox: {},
        trashBox: {}
    }
    
    Object.entries(messages).forEach(([messageId, box]) => {
        switch (box) {
            case UNREAD:
                mailBox.unreadBox[messageId] = true
                break
            case READ:
                mailBox.readBox[messageId] = true
                break
            case TRASH:
                mailBox.trashBox[messageId] = true
                break
            deafult:
                break // do nothing
        }
    })
    
    const unreadBox = Object.keys(mailBox.unreadBox)
    const readBox = Object.keys(mailBox.readBox)
    const trashBox = Object.keys(mailBox.trashBox)
    
    
    return [
        "UNREAD:".concat(unreadBox.length ? unreadBox.join(",") : "EMPTY"),
        "READ:".concat(readBox.length ? readBox.join(",") : "EMPTY"),
        "TRASH:".concat(trashBox.length ? trashBox.join(",") : "EMPTY")
    ]
}
   