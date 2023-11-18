import { defineStore } from 'pinia';
import { map } from 'lodash';
import NotesData from '@/data/apps/notes'

interface NotesType {
    id?: number | any;
    color?: string;
    title?: string;
    datef?: Date | any;
    deleted?: boolean;
}

interface noteType {
    notes: NotesType[];
    notesContent: number;
    noteSearch: string;
}

export const useNoteStore = defineStore({
    id: 'notes',
    state: (): noteType => ({
        notes: NotesData,
        notesContent: 1,
        noteSearch: ''
    }),
    actions: {
        //select chat
        SelectNote(itemID: number) {
            this.notesContent = itemID;
        },

        deleteNote(itemID: number) {
            const index = this.notes.findIndex((p) => p.id == itemID);
            this.notes.splice(index, 1);
        },
        updateNote(itemID: number, itemColor: any) {
            this.notes = map(this.notes, (note: any) => {
                if (note.id === itemID) {
                    return {
                        ...note,
                        color: itemColor
                    };
                }
                return note;
            });
        }
    }
});
