require "set"

class GraphNode
    attr_accessor :value, :neighbors

    def initialize(value)
        self.value = value
        self.neighbors = []
    end

    def add_neighbor(node)
        self.neighbors << node
    end
end

def bfs(starting_node, target_value)
    line = [starting_node]
    visited = Set.new()

    until line.empty?
        node = line.shift
        unless visited.include?(node)
            return node.value if node.value == target_value
            puts node.value
            visited.add(node)
            line += node.neighbors
            # node.neighbors.each {|neighbor| neighbors.bfs(neighbor ,target_value) }
        end
    end

    return nil
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.add_neighbor(b)
a.add_neighbor(c)
a.add_neighbor(e)
c.add_neighbor(b)
c.add_neighbor(d)
e.add_neighbor(a)
f.add_neighbor(e)

# p bfs(a, "b")
# p bfs(a, "f")
p bfs(f, "b")