import { defineStore } from 'pinia';
// project imports
import { uniqueId } from 'lodash';
import { sub } from 'date-fns';
import ChatData from '@/data/apps/chat'

interface chatType {
    chats: any;
    chatContent: any;
}

export const useChatStore = defineStore({
    id: 'chat',
    state: (): chatType => ({
        chats: ChatData,
        chatContent: 1
    }),
    getters: {
        // Get Chats from Getters
        getChats(state) {
            return state.chats;
        }
    },
    actions: {
        //select chat
        SelectChat(itemID: number) {
            this.chatContent = itemID;
        },
        sendMsg(itemID: number, item: string) {
            const newMessage = {
                id: itemID,
                msg: item,
                type: 'text',
                attachments: [],
                createdAt: sub(new Date(), { seconds: 1 }),
                senderId: itemID
            };

            this.chats = this.chats.filter((chat: any) => {
                return chat.id === itemID
                    ? {
                          ...chat,
                          ...chat.chatHistory.push(newMessage)
                      }
                    : chat;
            });
        }
    }
});
