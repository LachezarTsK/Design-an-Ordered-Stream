
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class OrderedStream {

    //connected to start directly or indirectly, through other sequence.
    int startIndexSequenceConnectedToStart;
    List<String> stream;

    public OrderedStream(int totalNumberOfValues) {
        stream = new ArrayList<>(Collections.nCopies(totalNumberOfValues, ""));
    }

    public List<String> insert(int idKey, String value) {
        stream.set(idKey - 1, value);
        int startIndex = startIndexSequenceConnectedToStart;
        int endIndex = startIndexSequenceConnectedToStart;
        while (endIndex < stream.size() && !stream.get(endIndex).isEmpty()) {
            ++endIndex;
        }
        startIndexSequenceConnectedToStart = endIndex;
        return stream.subList(startIndex, endIndex);
    }
}
