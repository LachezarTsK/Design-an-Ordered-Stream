
#include <vector>
#include <string>
using namespace std;

class OrderedStream {
    
    //connected to start directly or indirectly, through other sequence.
    int startIndexSequenceConnectedToStart{};
    vector<string> stream;

public:
    explicit OrderedStream(int totalNumberOfValues) {
        stream.assign(totalNumberOfValues, "");
    }

    vector<string> insert(int idKey, const string& value) {
        stream[idKey - 1] = value;
        int startIndex = startIndexSequenceConnectedToStart;
        int endIndex = startIndexSequenceConnectedToStart;
        while (endIndex < stream.size() && !stream[endIndex].empty()) {
            ++endIndex;
        }
        startIndexSequenceConnectedToStart = endIndex;
        return vector<string>(stream.begin() + startIndex, stream.begin() + endIndex);
    }
};
