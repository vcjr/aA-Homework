require "set"

class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end

    def add_neighbor(node)
        self.neighbors << node
    end
end

def bfs(starting_node, target_value)

end
