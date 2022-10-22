
class OrderedStream {

    /**
     * @param {number} totalNumberOfValues
     */
    constructor(totalNumberOfValues) {
        //connected to start directly or indirectly, through other sequence.
        this.startIndexSequenceConnectedToStart = 0;
        this.stream = new Array(totalNumberOfValues).fill('');
    }

    /** 
     * @param {number} idKey 
     * @param {string} value
     * @return {string[]}
     */
    insert(idKey, value) {
        this.stream[idKey - 1] = value;
        let startIndex = this.startIndexSequenceConnectedToStart;
        let endIndex = this.startIndexSequenceConnectedToStart;
        while (endIndex < this.stream.length && this.stream[endIndex] !== '') {
            ++endIndex;
        }
        this.startIndexSequenceConnectedToStart = endIndex;
        return this.stream.slice(startIndex, endIndex);
    }
}
