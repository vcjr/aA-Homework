class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val, neighbors)
        @val = val
        @neighbors = neighbors
    end
end

a = GraphNode.new("a", ["b", "c", "e"])
b = GraphNode.new("b", [])
c = GraphNode.new("c", ["b", "d"])
d = GraphNode.new("d", [])
e = GraphNode.new("e", ["a"])
f = GraphNode.new("f", ["e"])