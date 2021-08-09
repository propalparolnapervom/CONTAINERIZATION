for node in `kubectl get node | grep -v NAME | awk '{print $1}'`
do
    unset ALL_PODS_NUM_PER_NODE
    unset RUNNING_PODS_NUM_PER_NODE

    export ALL_PODS_NUM_PER_NODE=`kubectl get pods --all-namespaces -o wide | grep ${node} | wc -l`
    export RUNNING_PODS_NUM_PER_NODE=`kubectl get pods --all-namespaces -o wide | grep ${node} | grep -i Running | wc -l`
    
    echo "${node}         Total: ${ALL_PODS_NUM_PER_NODE}         Running: ${RUNNING_PODS_NUM_PER_NODE}"
done


kubectl get node -o wide

kubectl get pods --all-namespaces -o wide | wc -l
111

kubectl get pods --all-namespaces -o wide | grep -i running | wc -l
102


//////////
// DRAIN
//////////

export NODE_2_DRAIN="ip-10-0-3-220.ec2.internal"

# Before
kubectl get pods --all-namespaces -o wide | grep ${NODE_2_DRAIN}
kubectl get pods --all-namespaces -o wide | grep ${NODE_2_DRAIN} | wc -l

# Drain
kubectl drain --ignore-daemonsets=true --delete-local-data --timeout=60s --dry-run=true ${NODE_2_DRAIN}
kubectl drain --ignore-daemonsets=true --delete-local-data --timeout=60s ${NODE_2_DRAIN}

# After
kubectl get node -o wide
kubectl get pods --all-namespaces -o wide | grep ${NODE_2_DRAIN}
kubectl get pods --all-namespaces -o wide | grep ${NODE_2_DRAIN} | wc -l

for node in `kubectl get node | grep -v NAME | awk '{print $1}'`
do
    unset ALL_PODS_NUM_PER_NODE
    unset RUNNING_PODS_NUM_PER_NODE

    export ALL_PODS_NUM_PER_NODE=`kubectl get pods --all-namespaces -o wide | grep ${node} | wc -l`
    export RUNNING_PODS_NUM_PER_NODE=`kubectl get pods --all-namespaces -o wide | grep ${node} | grep -i Running | wc -l`
    
    echo "${node}         Total: ${ALL_PODS_NUM_PER_NODE}         Running: ${RUNNING_PODS_NUM_PER_NODE}"
done

kubectl get pods --all-namespaces -o wide | wc -l
111

kubectl get pods --all-namespaces -o wide | grep -i running | wc -l
102

# Latest check
kubectl get pods --all-namespaces -o wide | grep ${NODE_2_DRAIN}
kubectl get pods --all-namespaces -o wide | grep ${NODE_2_DRAIN} | wc -l

kgnd

echo 
echo "  This is for node:   ${NODE_2_DRAIN}"
echo

kgnd
